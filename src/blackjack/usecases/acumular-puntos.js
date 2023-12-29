import { valorCarta } from './valor-carta';

const puntosHTML = document.querySelectorAll('small');

/**
 * Esta función permite acumular puntos a el jugador
 * @param {HTMLElement} carta imagen de la carta
 * @param {Number} turno: 0 es el primer jugador y el último es la computadora
 * @param {Array<Number>} puntosJugadores la cantidad de puntos acumulados por los jugadores
 * @returns {Array<Number>} puntosJugadores del turno correspondiente
 */
export const acumularPuntos = ( carta, turno, puntosJugadores ) => {

    puntosJugadores[turno] += valorCarta( carta );
    puntosHTML[turno].innerText = puntosJugadores[turno];

    return puntosJugadores[turno];
}