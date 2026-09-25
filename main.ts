let a = 0
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 3; index++) {
        basic.setLedColor(0xff0000)
        basic.pause(33)
        basic.setLedColor(0xff8000)
        basic.pause(33)
        basic.setLedColor(0xffff00)
        basic.pause(33)
        basic.setLedColor(0xff9da5)
        basic.pause(33)
        basic.setLedColor(0xffff00)
        basic.pause(33)
        basic.setLedColor(0xff8000)
        basic.pause(33)
    }
    a = randint(0, 100)
})
basic.forever(function () {
    if (a == 1) {
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.pause(4)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(4)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.pause(4)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(4)
        }
    }
})
basic.forever(function () {
    if (a == 1) {
        basic.pause(2000)
    }
})
basic.forever(function () {
    if (a != 1) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
