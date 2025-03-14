let y = 0
let x = 0
// Start in the center
let item = game.createSprite(2, 2)
// Start in the center
basic.forever(function () {
    // Read Joystick X
    x = pins.analogReadPin(AnalogPin.P0)
    // Read Joystick Y
    y = pins.analogReadPin(AnalogPin.P1)
    basic.pause(100)
    if (x < 400) {
        // Move Left
        item.change(LedSpriteProperty.X, -1)
    } else if (x > 600) {
        // Move Right
        item.change(LedSpriteProperty.X, 1)
    } else if (y < 400) {
        // Move Up
        item.change(LedSpriteProperty.Y, -1)
    } else if (y > 600) {
        // Move Down
        item.change(LedSpriteProperty.Y, 1)
    }
})
