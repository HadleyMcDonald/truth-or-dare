input.onButtonPressed(Button.A, function () {
    Yennifer = randint(0, 1)
    if (Yennifer == 0) {
        basic.showString("Truth")
    } else if (Yennifer == 1) {
        basic.showString("Dare")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Truth")
    Yohonathon = randint(0, 4)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
    if (Yohonathon == 1) {
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
    } else if (Yohonathon == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (Yohonathon == 3) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
    } else if (Yohonathon == 4) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
})
let Yohonathon = 0
let Yennifer = 0
basic.showString("Welcome")
