basic.forever(function () {
    if (input.acceleration(Dimension.X) > -1023 && input.acceleration(Dimension.X) < -700) {
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . #
            . . . . .
            # # # # #
            `)
    } else if (input.acceleration(Dimension.X) > 300 && input.acceleration(Dimension.X) < 700) {
        basic.showLeds(`
            # # # # #
            . . . . .
            . # . . .
            . . . . .
            # # # # #
            `)
    } else if (input.acceleration(Dimension.X) > -300 && input.acceleration(Dimension.X) < 300) {
        basic.showLeds(`
            # # # # #
            . . . . .
            . . # . .
            . . . . .
            # # # # #
            `)
    } else if (input.acceleration(Dimension.X) > 800 && input.acceleration(Dimension.X) < 1023) {
        basic.showLeds(`
            # # # # #
            . . . . .
            # . . . .
            . . . . .
            # # # # #
            `)
    } else if (input.acceleration(Dimension.X) > -700 && input.acceleration(Dimension.X) < -300) {
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . # .
            . . . . .
            # # # # #
            `)
    }
})
