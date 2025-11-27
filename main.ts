radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showLeds(`
            . . . # #
            . # # # #
            # # # # .
            . # # . .
            . . . . .
            `)
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . # . #
            # . . . #
            . # # # .
            `)
    } else if (receivedNumber == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    radio.setGroup(1)
})
