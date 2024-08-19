function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let duplicado = [];
  for(let i = 0; i < array.length; i++){
    duplicado.push(array[i] * 2);
  }
  return duplicado;
}

module.exports = duplicarElementos;
