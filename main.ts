function bouger_diode_dans_colonne (texte: string) {
    for (let index = 0; index <= 4; index++) {
        let ligne = 0
        let colonne = 0
        if (led.point(colonne, ligne)) {
            led.unplot(0, 0)
            ligne_suivante = ligne + direction[0]
            led.plot(colonne, ligne_suivante)
            if (ligne_suivante <= 0) {
                let liste: number[] = []
                liste[colonne] = 0
            }
        }
    }
}
let ligne_suivante = 0
let direction: number[] = []
direction = [1, 1, 1, 1, -1]
for (let index = 0; index <= 4; index++) {
    let i = 0
    led.plot(i, i)
}
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        let colonne_boucle = ""
        bouger_diode_dans_colonne(colonne_boucle)
    }
    basic.pause(200)
})
