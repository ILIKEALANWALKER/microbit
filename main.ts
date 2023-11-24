input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    pins.analogWritePin(AnalogPin.P0, 173)
})
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
})
input.onSound(DetectedSound.Loud, function () {
    pins.analogWritePin(AnalogPin.P0, 1023)
})
