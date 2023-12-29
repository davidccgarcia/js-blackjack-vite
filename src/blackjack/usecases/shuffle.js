// Esta función se encarga de ordenar los elementos del array (Mezclar la baraja)
export const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
}