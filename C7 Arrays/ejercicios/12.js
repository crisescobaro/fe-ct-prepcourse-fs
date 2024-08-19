function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let caracteresmayus = array.split('');
  let mayus = [];
  for(let i = 0; i < caracteresmayus.length; i++){
    mayus.push(caracteresmayus[i].toUpperCase());
  }
  return mayus.join('');
}

module.exports = convertirStringAMayusculas;
