input.onButtonPressed(Button.A, function () {
    lumiere = 3
})
function orange () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function pieton () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.showNumber(10)
    basic.pause(1000)
    basic.showNumber(9)
    basic.pause(1000)
    basic.showNumber(8)
    basic.pause(1000)
    basic.showNumber(7)
    basic.pause(1000)
    basic.showNumber(6)
    basic.pause(1000)
    basic.showNumber(5)
    basic.pause(1000)
    basic.showNumber(4)
    basic.pause(1000)
    basic.showNumber(3)
    for (let index = 0; index < 5; index++) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P8, 1)
    }
    basic.showNumber(2)
    for (let index = 0; index < 5; index++) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
    basic.showNumber(1)
    for (let index = 0; index < 5; index++) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
    basic.showNumber(0)
    basic.pause(1000)
    basic.clearScreen()
}
function rouge () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function vert () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
let lumiere = 0
lumiere = 1
basic.forever(function () {
    if (lumiere == 1) {
        while (lumiere == 1) {
            vert()
            basic.pause(5000)
            orange()
            basic.pause(5000)
            rouge()
            basic.pause(5000)
        }
    } else if (lumiere == 3) {
        while (lumiere == 3) {
            pieton()
            basic.pause(3000)
            lumiere = 1
        }
    }
})
