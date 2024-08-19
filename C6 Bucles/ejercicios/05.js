function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:
  let resultado = "Soy falso";
  let i = 0;
  while (i < 1) {
    if (valor) {
      resultado = "Soy verdadero";
    }
    break;
  }
  return resultado;
}

module.exports = esVerdadero;
