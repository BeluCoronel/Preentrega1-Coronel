class character {
    constructor ( id, nombre, tipo, vidaBase, danioBase ){
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.vidaBase = vidaBase;
        this.danioBase = danioBase;
    }

    recibirDanio(danio){
        this.vidaBase -= danio;
    }

    atacar(character){
        character.recibirDanio(this.danioBase);
    }
}

function asignarHeroe() {
    return prompt(`¿Desea crear un Mago, Guerrero o Tanque?`)
}


function Heroe(tipoDeHeroe, filtrarHeroe) {
    return filtrarHeroe(tipoDeHeroe, arrayheroes);
}

function asignarEnemigo() {
    return prompt(`¿Desea crear un Gobling, Orco o Demonio`)
}

function Enemigo(tipoDeEnemigo, filtrarEnemigo) {
    return filtrarEnemigo(tipoDeEnemigo, arrayenemigos);
}




function comienzoDeBatalla() {
    for (let i = 0; i < 3; i++) {
        console.log(`TURNO = ${i + 1}`)
        ataqueAEnemigo();
        ataqueAHeore();
        if (heroe.vidaBase <= 0) {
            console.log(`El ${heroe.tipo} ha caído. El ganador es ${enemigo.tipo}`)
            break
        }
        else if (enemigo.vidaBase <= 0) {
            console.log(`El ${enemigo.tipo} ha caído. El ganador es ${heroe.tipo}`)
            break
        }

    }

}

function ataqueAEnemigo() {
    heroe.atacar(enemigo)
    console.log(`El ${heroe.tipo} ha atacado al ${enemigo.tipo}, por ${heroe.danioBase} de daño. Al enemigo le quedan ${enemigo.vidaBase} puntos de vida`)
}

function ataqueAHeore() {
    enemigo.atacar(heroe)
    console.log(`El ${enemigo.tipo} ha atacado al ${heroe.tipo}, por ${enemigo.danioBase} de daño. Al heore le quedan ${heroe.vidaBase} puntos de vida`)
}



function verificarGanador() {
    if(heroe.vidaBase < 0 && enemigo.vidaBase <0 ){
        console.log("Se mataron los dos")
    }
    else if (heroe.vidaBase > enemigo.vidaBase) {
        console.log(`El ganador es ${heroe.tipo}`)
    }
    else if (heroe.vidaBase < enemigo.vidaBase) {
        console.log(`El ganador es ${enemigo.tipo}`)
    }
    else if (heroe.vidaBase == enemigo.vidaBase) {
        console.log(`El ${heroe.tipo} y ${enemigo.tipo} han empatado`)
    }
}



const arrayheroes = [
    new character("01","Mandy","Mago", 225, 180),
    new character("02","Amber","Guerrero", 300, 80),
    new character("03","Buster","Tanque", 450, 50)
]

const arrayenemigos = [
    new character("001","Gale","Gobling", 180, 70),
    new character("002","Frank","Orco", 350, 130),
    new character("003","Janet","Demonio", 450, 110)
]

function filtrarCharacter(tipo, array){
    return array.filter(element => element.tipo == tipo)[0]
}

const tipoDeHeroe = asignarHeroe();
const tipoDeEnemigo = asignarEnemigo();
const heroe = Heroe(tipoDeHeroe,filtrarCharacter);
const enemigo = Enemigo(tipoDeEnemigo,filtrarCharacter);
comienzoDeBatalla();
verificarGanador();
