// Butterscotch audio worklet processor.
//
// Reads interleaved-stereo float32 PCM frames from a SharedArrayBuffer ring buffer that
// is filled by the worker (which pulls samples out of miniaudio in noDevice mode).
// SAB layout:
//   bytes [0 .. 8)   : two Int32 atomics, [readIdxFrames, writeIdxFrames]
//   bytes [8 .. end) : capacityFrames * 2 (channels) * 4 (bytes/float) of interleaved PCM
//
// The producer (worker) owns writeIdx; the consumer (this worklet) owns readIdx.
// Both indices wrap modulo (2 * capacity) so we can disambiguate "empty" from "full"
// without sacrificing a slot. Effective frame index = idx % capacity.

class ButterscotchAudioProcessor extends AudioWorkletProcessor {
    constructor(options) {
        super();
        const opts = options.processorOptions;
        this.sab = opts.sab;
        this.capacityFrames = opts.capacityFrames;
        this.modulus = this.capacityFrames * 2;
        this.header = new Int32Array(this.sab, 0, 2);
        this.ring = new Float32Array(this.sab, 8, this.capacityFrames * 2);
    }

    process(_inputs, outputs) {
        const output = outputs[0];
        const left = output[0];
        const right = output.length > 1 ? output[1] : output[0];
        const blockSize = left.length;

        const writeIdx = Atomics.load(this.header, 1);
        let readIdx = Atomics.load(this.header, 0);

        const available = (writeIdx - readIdx + this.modulus) % this.modulus;
        const toRead = Math.min(blockSize, available);

        for (let i = 0; i < toRead; i++) {
            const frameIdx = (readIdx + i) % this.capacityFrames;
            const base = frameIdx * 2;
            left[i] = this.ring[base];
            right[i] = this.ring[base + 1];
        }
        // Underrun: zero-fill the rest.
        for (let i = toRead; i < blockSize; i++) {
            left[i] = 0;
            right[i] = 0;
        }

        if (toRead > 0) {
            Atomics.store(this.header, 0, (readIdx + toRead) % this.modulus);
        }

        return true;
    }
}

registerProcessor("butterscotch-audio", ButterscotchAudioProcessor);
