input.onButtonPressed(Button.A, function () {
    if (drum_fill == 0) {
        drum_fill = 1
    } else {
        drum_fill = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    if (already_playing == 1) {
        already_playing = 0
    } else {
        already_playing = 1
    }
})
input.onGesture(Gesture.Shake, function () {
    midi.playTone(523, music.beat(BeatFraction.Whole))
    midi.playTone(494, music.beat(BeatFraction.Whole))
    midi.playTone(523, music.beat(BeatFraction.Whole))
    midi.playTone(440, music.beat(BeatFraction.Whole))
    midi.playTone(392, music.beat(BeatFraction.Whole))
    midi.playTone(494, music.beat(BeatFraction.Whole))
    midi.playTone(523, music.beat(BeatFraction.Whole))
})
let drum_fill = 0
let already_playing = 0
midi.useRawSerial()
already_playing = 0
basic.forever(function () {
    while (already_playing == 1) {
        midi.playDrum(DrumSound.BassDrum1)
        music.rest(music.beat(BeatFraction.Whole))
        midi.playDrum(DrumSound.ElectricSnare)
        music.rest(music.beat(BeatFraction.Whole))
        midi.playDrum(DrumSound.BassDrum1)
        music.rest(music.beat(BeatFraction.Half))
        midi.playDrum(DrumSound.BassDrum1)
        music.rest(music.beat(BeatFraction.Half))
        if (drum_fill == 1) {
            midi.playDrum(DrumSound.ElectricSnare)
            music.rest(music.beat(BeatFraction.Quarter))
            midi.playDrum(DrumSound.ElectricSnare)
            music.rest(music.beat(BeatFraction.Quarter))
            midi.playDrum(DrumSound.ElectricSnare)
            music.rest(music.beat(BeatFraction.Quarter))
            midi.playDrum(DrumSound.ElectricSnare)
            music.rest(music.beat(BeatFraction.Quarter))
        } else {
            midi.playDrum(DrumSound.ElectricSnare)
            music.rest(music.beat(BeatFraction.Whole))
        }
    }
})
