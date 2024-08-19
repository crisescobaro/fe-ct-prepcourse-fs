function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  let resultado = false;
  let i = 0;
  while (i < 1) {
    if (num % 3 === 0 && num % 5 === 0) {
      resultado = "fizzbuzz";
    } else if (num % 3 === 0) {
      resultado = "fizz";
    } else if (num % 5 === 0) {
      resultado = "buzz";
    }
    i++;
  }
  return resultado;
}

module.exports = fizzBuzz;
