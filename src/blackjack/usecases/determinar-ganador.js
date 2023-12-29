/**
 * Esta función me permite determinar quien es el ganador del juego
 * @param {Array<Number>} puntosJugadores la cantidad de puntos acumulados por los jugadores
 */
export const determinarGanador = ( puntosJugadores ) => {

    let [ puntosMinimos, puntosComputadora ] = puntosJugadores;

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora Gana!');
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana!');
        } else {
            alert('Computadora gana!');
        }
    }, 100);
}