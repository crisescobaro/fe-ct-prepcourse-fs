function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let multix6 = [];
  for(let i = 0; i <= 10; i++){
    multix6.push(i * 6);
  }
  return multix6;
}

module.exports = tablaDelSeis;
