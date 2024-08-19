function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let mayoresA10 = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] > 10){
      mayoresA10.push(array[i]);
    }
  }
return mayoresA10;
}

module.exports = contarElementosMayoresA10;
