import { pedirCarta, acumularPuntos, crearCarta, determinarGanador } from ".";

/**
 * Esta función le permite mostrar las cartas en el HTML a la computadora
 * @param {Number} puntosMinimos a superar por la computadora
 * @param {Array<String>} deck para tomar una carta
 * @param {Array<Number>} puntosJugadores la cantidad de puntos acumulados por los jugadores
 * @param {HTMLElement} divCartasJugadores elemento HTML donde se ubican las cartas de los jugadores
 */
export const turnoComputadora = ( puntosMinimos, deck, puntosJugadores, divCartasJugadores ) => {

    let puntosComputadora = 0;

    do {

        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos( carta, puntosJugadores.length - 1, puntosJugadores );
        crearCarta( carta, puntosJugadores.length - 1, divCartasJugadores );

    } while ( ( puntosComputadora < puntosMinimos ) && ( puntosMinimos <= 21 ) )

    determinarGanador(puntosJugadores);
}