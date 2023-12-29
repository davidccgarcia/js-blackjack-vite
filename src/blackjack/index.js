import { crearDeck, pedirCarta, acumularPuntos, crearCarta, turnoComputadora } from "./usecases";

/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 */

let deck         = [];
const tipos      = ['C', 'D', 'H', 'S'], 
      especiales = ['A', 'J', 'Q', 'K'];

// let puntosJugador = 0,
//    puntosComputadora = 0;
let puntosJugadores = [];

// Referencias HTML
const btnPedir   = document.querySelector('#btnPedir'),
      btnDetener = document.querySelector('#btnDetener'),
      btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugadores = document.querySelectorAll('.divCartas'),
      puntosHTML         = document.querySelectorAll('small');

// Esta función me permite inicialiazar el juego
const inicialiazarJuego = ( numJugadores = 2 ) => {
    deck = crearDeck(tipos, especiales);

    puntosJugadores = [];

    for (let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0);
    }

    puntosHTML.forEach( elem => elem.innerText = 0);
    divCartasJugadores.forEach( elem => elem.innerHTML = '');

    btnPedir.disabled = false;
    btnDetener.disabled = false;
}

// Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck);
    const puntosJugador = acumularPuntos( carta, 0, puntosJugadores );

    crearCarta( carta, 0, divCartasJugadores );

    if (puntosJugador > 21) {
        console.warn('Lo siento mucho, perdiste!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, deck, puntosJugadores, divCartasJugadores );
    } else if (puntosJugador === 21) {
        console.warn('21, Genial!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, deck, puntosJugadores, divCartasJugadores );
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora( puntosJugadores[1], deck, puntosJugadores, divCartasJugadores );
});

btnNuevo.addEventListener('click', () => {
    inicialiazarJuego();
});

