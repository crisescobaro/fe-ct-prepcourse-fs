function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if(array.length === 0){
    return null;
  }
  let nummax = array[0];
  for(let i = 1; i < array.length; i++){
    if(array[i] > nummax){
      nummax = array[i];
    }
  }
return nummax;
}

module.exports = encontrarIndiceMayor;
