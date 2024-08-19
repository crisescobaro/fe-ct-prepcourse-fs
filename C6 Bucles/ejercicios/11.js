function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  let enRango = false;
  let i = 0;
  while (i < 1) {
    if (num > 20 && num < 50) {
      enRango = true;
    }
    i++;
  }
  return enRango;
}

module.exports = estaEnRango;
