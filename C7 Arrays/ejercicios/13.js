function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let numpares = [];
  for(let i = 0; i < array.length; i++){
  if( array[i] % 2 === 0){
  numpares.push(array[i]);
  }
  }
  return numpares;
}

module.exports = filtrarNumerosPares;
