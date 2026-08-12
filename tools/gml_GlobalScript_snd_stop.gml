function snd_stop(arg0)
{
    // The legacy web runner can leave streamed music audible after stop.
    // Muting the exact playing instance first prevents stale battle layers.
    audio_sound_gain(arg0, 0, 0);
    audio_stop_sound(arg0);
}

function sound_stop(arg0)
{
    snd_stop(arg0);
}
