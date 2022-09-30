input.onButtonPressed(Button.A, function () {
    if (Posición_Paleta > 0) {
        Paleta_1.move(-1)
        Paleta_2.move(-1)
        Posición_Paleta += -1
    }
})
function Mover_Pelota () {
    basic.pause(300)
    Pelota.move(1)
    Pelota.ifOnEdgeBounce()
    if (Pelota.isTouching(Paleta_1) || Pelota.isTouching(Paleta_2)) {
        Pelota.set(LedSpriteProperty.Direction, 0)
        azar = 0
        if (azar == randint(0, 1)) {
            Pelota.turn(Direction.Left, 45)
        } else {
            Pelota.turn(Direction.Right, 45)
        }
        Puntos += 1
    } else {
        if (Pelota.get(LedSpriteProperty.Y) == 4) {
            basic.clearScreen()
            basic.showString("GAME OVER")
            basic.showString("Pts.")
            basic.showString("" + (Puntos))
        }
        Nivel_2()
    }
}
input.onButtonPressed(Button.B, function () {
    if (Posición_Paleta < 3) {
        Paleta_1.move(1)
        Paleta_2.move(1)
        Posición_Paleta += 1
    }
})
function Nivel_2 () {
    if (Puntos == 20) {
        basic.pause(200)
        Pelota.move(1)
    }
}
let azar = 0
let Posición_Paleta = 0
let Puntos = 0
let Pelota: game.LedSprite = null
let Paleta_2: game.LedSprite = null
let Paleta_1: game.LedSprite = null
Paleta_1 = game.createSprite(2, 4)
Paleta_2 = game.createSprite(3, 4)
Pelota = game.createSprite(3, 4)
Puntos = 0
Posición_Paleta = 2
Pelota.turn(Direction.Right, 90)
basic.forever(function () {
    Mover_Pelota()
})
