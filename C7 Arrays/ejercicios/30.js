function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  if (numeros.length === 0) {
    return null;
  }
  const elementosVistos = new Set();
  for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    if (elementosVistos.has(numero)) {
      return numero;
    }
    elementosVistos.add(numero);
  }

  return null;
}

module.exports = encontrarElementoRepetido;