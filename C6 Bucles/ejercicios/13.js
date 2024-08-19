function esEntero(num) {
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:
  let esEntero = false;
  let i = 0;
while (i < 1) {
  if (num % 1 === 0) {
    esEntero = true;
  }
  i++;
}
return esEntero;
}

module.exports = esEntero;
