function operadoresLogicos(num1, num2, num3) {
  // La función recibe tres números distintos.
  // Si num1 es mayor a num2 y a num3, y además es positivo, retorna ---> "Numero 1 es mayor y positivo".
  // Si alguno de los tres números es negativo, retorna ---> "Hay negativos".
  // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retorna el nuevo valor.
  // Si todos los argumentos son cero, retorna ---> "Error".
  // Si no se cumple ninguna de las condiciones anteriores, retorna false.
  // Tu código:
  let resultado = false;
  let i = 0;
  while (i < 1) {
    if (num1 > num2 && num1 > num3 && num1 > 0) {
      resultado = "Numero 1 es mayor y positivo";
      break;
    }
    i++;
  }
  let j = 0;
  while (j < 1) {
    if (num1 < 0 || num2 < 0 || num3 < 0) {
      resultado = "Hay negativos";
      break;
    }
    j++;
  }
  let k = 0;
  while (k < 1) {
    if (num3 > num1 && num3 > num2) {
      resultado = num3 + 1;
      break;
    }
    k++;
  }
  let l = 0;
  while (l < 1) {
    if (num1 === 0 && num2 === 0 && num3 === 0) {
      resultado = "Error";
      break;
    }
    l++;
  }
  return resultado;
}

module.exports = operadoresLogicos;
