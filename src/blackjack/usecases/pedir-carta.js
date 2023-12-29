/**
 * Esta función permite tomar una carta del deck
 * @param {Array<String>} deck 
 * @returns {String} retorna la carta como un string
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    return deck.pop();
}