input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendNumber(2)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(0)
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendNumber(3)
})
radio.setGroup(1)
