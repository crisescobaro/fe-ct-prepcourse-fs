function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0) {
    return null;
  }
  let min = Math.min(...numeros);
  let max = Math.max(...numeros);
  let sumaEsperada = ((max * (max + 1)) / 2) - ((min * (min - 1)) / 2);
  let sumaActual = numeros.reduce((acc, num) => acc + num, 0);
  let numeroFaltante = sumaEsperada - sumaActual;
  if (numeroFaltante === 0) {
    return null;
  }

  return numeroFaltante;
}

module.exports = encontrarNumeroFaltante;