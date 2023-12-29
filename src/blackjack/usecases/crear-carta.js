/**
 * Esta función me permite crear la carta en el HTML
 * @param {HTMLElement} carta imagen de la carta
 * @param {Number} turno: 0 es el primer jugador y el último es la computadora
 * @param {HTMLElement} divCartasJugadores elemento HTML donde se ubican las cartas de los jugadores
 */
export const crearCarta = ( carta, turno, divCartasJugadores ) => {

    if ( !carta ) throw new Error('La carta es un argumento obligatorio');
    if ( !divCartasJugadores ) throw new Error('El divCartasJugadores es un argumento obligatorio');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    imgCarta.alt = 'carta';
    divCartasJugadores[turno].append( imgCarta );
}