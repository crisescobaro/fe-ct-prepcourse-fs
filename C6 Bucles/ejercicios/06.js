function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  let contador = 0;
  let n = Math.abs(num);
  while (n > 0) {
    n = Math.floor(n / 10);
    contador++;
  }
  if (contador === 3) {
    return true;
  } else {
    return false;
  }
}

module.exports = tieneTresDigitos;
