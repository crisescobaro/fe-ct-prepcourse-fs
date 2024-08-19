function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let multix = [];
  for(let i = 0; i < array.length; i++){
    multix.push(array[i] * i)
  }
  return multix;
}

module.exports = multiplicarElementosPorIndice;
