input.onButtonPressed(Button.A, function () {
    while (true) {
        led.setBrightness(255 - input.lightLevel())
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        led.plotBarGraph(
        input.lightLevel(),
        255
        )
    }
})
basic.forever(function () {
	
})
