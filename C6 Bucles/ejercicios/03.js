function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  let i = 0;
  while (i < 1) {
    if (x > y) {
      return x;
    } else if (y > x) {
      return y;
    } else {
      return x;
    }
    i++;
  }
}

module.exports = obtenerMayor;
