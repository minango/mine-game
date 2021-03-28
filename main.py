def on_button_pressed_a():
    hero.turn(Direction.RIGHT, 90)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    hero.move(1)
input.on_button_pressed(Button.B, on_button_pressed_b)

hero: game.LedSprite = None
hero = game.create_sprite(0, 0)

def on_forever():
    pass
basic.forever(on_forever)
