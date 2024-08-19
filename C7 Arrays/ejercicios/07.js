function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  let todosNumeros = array.every(item => typeof item === 'number');
  if (todosNumeros) {
    return array.sort((a, b) => a - b);
  } else {
    return array.sort((a, b) => a.localeCompare(b));
  }
}

module.exports = ordenarArray;
