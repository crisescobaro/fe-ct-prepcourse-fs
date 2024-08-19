function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }
  let producto = 1;
  let i = a;
  while (i <= b) {
    producto *= i;
    i++;
  }
  return producto;
}

module.exports = productoEntreNúmeros;