input.onButtonPressed(Button.A, function () {
    if (Posición_Paleta > 0) {
        Paleta_1.move(-1)
        Paleta_2.move(-1)
        Posición_Paleta += -1
    }
})
function Mover_Pelota () {
	
}
input.onButtonPressed(Button.B, function () {
    if (Posición_Paleta < 3) {
        Paleta_1.move(1)
        Paleta_2.move(1)
        Posición_Paleta += 1
    }
})
let Posición_Paleta = 0
let Paleta_2: game.LedSprite = null
let Paleta_1: game.LedSprite = null
Paleta_1 = game.createSprite(2, 4)
Paleta_2 = game.createSprite(3, 4)
let Pelota = game.createSprite(2, 0)
let Puntos = 0
Posición_Paleta = 2
Pelota.turn(Direction.Right, 90)
