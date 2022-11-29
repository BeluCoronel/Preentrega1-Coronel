
let tipoDeHeroe = ""
let danioBaseHeroe = 0
let vidaBaseHeroe = 0

let tipoDeEnemigo = ""
let danioBaseEnemigo = 0
let vidaBaseEnemigo = 0

function asignarHeroe(){
    tipoDeHeroe = prompt(`¿Desea crear un panda mago, guerrero o tanque?`)
}


function heroe(tipoDeHeroe) {
    if (tipoDeHeroe == `panda mago`) {
        vidaBaseHeroe = 225
        danioBaseHeroe = 180
    }

    else if (tipoDeHeroe == `guerrero`) {
        vidaBaseHeroe = 300
        danioBaseHeroe = 80
    }
    else if (tipoDeHeroe == `tanque`) {
        vidaBaseHeroe = 450
        danioBaseHeroe = 50
    }
}

function asignarEnemigo(){
    tipoDeEnemigo = prompt(`¿Desea crear un gobling, orco o demonio`)
}

function enemigo(tipoDeEnemigo) {
    if (tipoDeEnemigo == `gobling`) {
        vidaBaseEnemigo = 180
        danioBaseEnemigo = 70
    }

    else if (tipoDeEnemigo == `orco`) {
        vidaBaseEnemigo = 350
        danioBaseEnemigo = 130
    }
    else if (tipoDeEnemigo == `demonio`) {
        vidaBaseEnemigo = 450
        danioBaseEnemigo = 110
    }

}




function comienzoDeBatalla() {
    for (let i = 0; i < 3; i++) {
        console.log(`TURNO = ${i + 1}`)
        ataqueAEnemigo();
        ataqueAHeore();
        if (vidaBaseHeroe <= 0) {
            console.log(`El ${tipoDeHeroe} ha caído. El ganador es ${tipoDeEnemigo}`)
            break
        }
        else if (vidaBaseEnemigo <= 0) {
            console.log(`El ${tipoDeEnemigo} ha caído. El ganador es ${tipoDeHeroe}`)
            break
        }

    }

}

function ataqueAEnemigo() {
    vidaBaseEnemigo -= danioBaseHeroe
    console.log(`El ${tipoDeHeroe} ha atacado al ${tipoDeEnemigo}, por ${danioBaseHeroe} de daño. Al enemigo le quedan ${vidaBaseEnemigo} puntos de vida`)
}

function ataqueAHeore() {
    vidaBaseHeroe -= danioBaseEnemigo
    console.log(`El ${tipoDeEnemigo} ha atacado al ${tipoDeHeroe}, por ${danioBaseEnemigo} de daño. Al heore le quedan ${vidaBaseHeroe} puntos de vida`)
}



function verificarGanador() {
    if (vidaBaseHeroe > vidaBaseEnemigo) {
        console.log(`El ganador es ${tipoDeHeroe}`)
    }
    else if (vidaBaseEnemigo > vidaBaseHeroe) {
        console.log(`El ganador es ${tipoDeEnemigo}`)
    }
    else if (vidaBaseEnemigo == vidaBaseHeroe) {
        console.log(`El ${tipoDeHeroe} y ${tipoDeEnemigo} han empatado`)
    }
}

asignarHeroe();
asignarEnemigo();
heroe(tipoDeHeroe);
enemigo(tipoDeEnemigo);
comienzoDeBatalla();
verificarGanador();



