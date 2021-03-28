input.onButtonPressed(Button.A, function () {
    hero.turn(Direction.Right, 90)
})
input.onButtonPressed(Button.B, function () {
    hero.move(1)
})
let hero: game.LedSprite = null
hero = game.createSprite(0, 0)
basic.forever(function () {
    if (hero.get(LedSpriteProperty.X) == 4 && hero.get(LedSpriteProperty.Y) == 4) {
        music.playMelody("B A G A G F A C5 ", 120)
        basic.showString("goal")
        hero.set(LedSpriteProperty.X, 4)
        hero.set(LedSpriteProperty.Y, 4)
    } else if (hero.get(LedSpriteProperty.X) == 1 && hero.get(LedSpriteProperty.Y) == 0) {
        game.gameOver()
        hero.set(LedSpriteProperty.X, 0)
        hero.set(LedSpriteProperty.Y, 0)
    } else if (hero.get(LedSpriteProperty.X) == 3 && hero.get(LedSpriteProperty.Y) == 4) {
        game.gameOver()
    } else if (hero.get(LedSpriteProperty.X) == 2 && hero.get(LedSpriteProperty.Y) == 2) {
        game.gameOver()
    } else if (hero.get(LedSpriteProperty.X) == 1 && hero.get(LedSpriteProperty.Y) == 3) {
        game.gameOver()
    } else if (hero.get(LedSpriteProperty.X) == 4 && hero.get(LedSpriteProperty.Y) == 2) {
        game.gameOver()
    } else if (hero.get(LedSpriteProperty.X) == 0 && hero.get(LedSpriteProperty.Y) == 2) {
        game.gameOver()
    } else if (hero.get(LedSpriteProperty.X) == 0 && hero.get(LedSpriteProperty.Y) == 4) {
        game.gameOver()
    } else if (hero.get(LedSpriteProperty.X) == 2 && hero.get(LedSpriteProperty.Y) == 2) {
        game.gameOver()
    } else if (hero.get(LedSpriteProperty.X) == 2 && hero.get(LedSpriteProperty.Y) == 2) {
        game.gameOver()
    } else if (hero.get(LedSpriteProperty.X) == 4 && hero.get(LedSpriteProperty.Y) == 1) {
        game.gameOver()
    } else if (hero.get(LedSpriteProperty.X) == 4 && hero.get(LedSpriteProperty.Y) == 0) {
        game.gameOver()
    } else {
    	
    }
})
