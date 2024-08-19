function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let suma = 0;
  let i = 1;
  while (i <= n) {
    suma += i;
    i++;
  }
  return suma;
}

module.exports = sumarHastaN;
