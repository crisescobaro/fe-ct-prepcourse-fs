function esDiezOCinco(num) {
  // Retornar true si "num" es 10 o 5.
  // De lo contrario, retornar false.
  // Tu código:
  let esDiez = false;
  let esCinco = false;
  let i = 0;
  while (i < 1) {
    if (num === 10) {
      esDiez = true;
    }
    i++;
  }
  let j = 0;
  while (j < 1) {
    if (num === 5) {
      esCinco = true;
    }
    j++;
  }
  if (esDiez || esCinco) {
    return true;
  } else {
    return false;
  }
}

module.exports = esDiezOCinco;
