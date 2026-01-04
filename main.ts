input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 20; index++) {
        TiraLEDs.rotate(1)
        basic.pause(100)
        TiraLEDs.show()
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        TiraLEDs.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(1000)
        TiraLEDs.showColor(neopixel.colors(NeoPixelColors.Yellow))
        basic.pause(1000)
        TiraLEDs.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(1000)
        TiraLEDs.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(1000)
        TiraLEDs.showColor(neopixel.colors(NeoPixelColors.Purple))
        basic.pause(1000)
    }
})
let TiraLEDs: neopixel.Strip = null
basic.showIcon(IconNames.Heart)
let NumLeds = 8
TiraLEDs = neopixel.create(DigitalPin.P1, NumLeds, NeoPixelMode.RGB)
TiraLEDs.showRainbow(1, 360)
TiraLEDs.show()
