class TobyWebButterscotchAudio extends AudioWorkletProcessor {
  constructor(options) {
    super();
    const { buffer, capacityFrames } = options.processorOptions;
    this.capacityFrames = capacityFrames;
    this.modulus = capacityFrames * 2;
    this.header = new Int32Array(buffer, 0, 2);
    this.samples = new Float32Array(buffer, 8, capacityFrames * 2);
    this.reportCountdown = 0;
  }

  process(_inputs, outputs) {
    const output = outputs[0];
    const left = output[0];
    const right = output[1] || left;
    const writeIndex = Atomics.load(this.header, 1);
    let readIndex = Atomics.load(this.header, 0);
    const available = (writeIndex - readIndex + this.modulus) % this.modulus;
    const count = Math.min(left.length, available);
    let peak = 0;

    for (let frame = 0; frame < count; frame += 1) {
      const source = ((readIndex + frame) % this.capacityFrames) * 2;
      const leftSample = this.samples[source];
      const rightSample = this.samples[source + 1];
      left[frame] = leftSample;
      right[frame] = rightSample;
      peak = Math.max(peak, Math.abs(leftSample), Math.abs(rightSample));
    }
    left.fill(0, count);
    right.fill(0, count);

    if (count > 0) {
      readIndex = (readIndex + count) % this.modulus;
      Atomics.store(this.header, 0, readIndex);
    }
    if (peak > 0.00001 && this.reportCountdown <= 0) {
      this.port.postMessage({ peak });
      this.reportCountdown = 20;
    }
    this.reportCountdown -= 1;
    return true;
  }
}

registerProcessor("toby-web-butterscotch-audio", TobyWebButterscotchAudio);
