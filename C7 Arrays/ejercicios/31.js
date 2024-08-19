function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  if(texto.length === 0){
    return texto
  }
  let array = texto.split('');
  let array1 = array.reverse();
  let textoinvertido = array1.join('');
  return textoinvertido; 
}

module.exports = invertirTexto;
