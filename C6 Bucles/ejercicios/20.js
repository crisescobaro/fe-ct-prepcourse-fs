function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   let suma = 0;
   let i = 1;
   while (i <= n) {
     suma += i;
     if (suma > 100) {
       break;
     }
     i++;
   }
   return suma;
}

module.exports = sumarHastaNConBreak;
