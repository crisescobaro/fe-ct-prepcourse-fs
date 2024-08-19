function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
  let mensaje = "Hola!";
  let i = 0;
  while (i < 1) {
    switch (idioma) {
      case "aleman":
        mensaje = "Guten Tag!";
        break;
      case "mandarin":
        mensaje = "Ni Hao!";
        break;
      case "ingles":
        mensaje = "Hello!";
        break;
    }
    break;
  }
  return mensaje;
}

module.exports = saludo;
