function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let newTest = 0;
  for(let i = 0; i < resultadosTest.length; i++){
    newTest += resultadosTest[i];
  }
  let promedio = newTest / resultadosTest.length
  return promedio;
}

module.exports = promedioResultadosTest;
