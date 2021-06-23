input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
let tid = 0
radio.setGroup(12)
pins.setAudioPin(AnalogPin.P0)
basic.forever(function () {
    tid = 5
    while (tid != 0 && (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B))) {
        basic.showString("" + (tid))
        music.playTone(392, music.beat(BeatFraction.Half))
        tid += -1
        basic.pause(300)
    }
    if (tid == 0) {
        radio.sendNumber(1)
        music.playTone(523, music.beat(BeatFraction.Double))
        basic.showIcon(IconNames.House)
        basic.pause(2000)
        basic.clearScreen()
        tid = 5
    }
})
