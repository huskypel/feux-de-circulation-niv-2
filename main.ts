input.onButtonPressed(Button.A, function () {
    if (lumiere == 1) {
        vert()
        basic.pause(2000)
        orange()
        basic.pause(2000)
        rouge()
        basic.pause(2000)
    } else if (lumiere == 2) {
        orange()
        basic.pause(2000)
        rouge()
        basic.pause(2000)
    } else if (lumiere == 3) {
        rouge()
        basic.pause(2000)
    } else if (lumiere == 0) {
        rouge()
        basic.pause(2000)
    }
})
function orange () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function rouge () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
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
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showNumber(1)
    basic.pause(1000)
    basic.showNumber(0)
    basic.pause(1000)
}
function vert () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
let lumiere = 0
lumiere = 0
basic.forever(function () {
    vert()
    lumiere = 1
    basic.pause(2000)
    orange()
    lumiere = 2
    basic.pause(2000)
    rouge()
    lumiere = 3
    basic.pause(2000)
    lumiere = 0
})
