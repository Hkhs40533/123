radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > a) {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `)
    }
    if (receivedNumber < a) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    if (receivedNumber == a) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    a = randint(1, 6)
    basic.showNumber(a)
    radio.sendNumber(a)
})
let a = 0
radio.setGroup(133)
