function esPositivoOInferiorA10(a) {
   // La función recibe un número "a" por parámetro.
   // Retorna true si es positivo y menor que 10.
   // Retorna false en caso contrario.
   // Tu código:
   let esPositivo = false;
   let esMenorQueDiez = false;
   let i = 0;
   while (i < 1) {
     if (a > 0) {
       esPositivo = true;
     }
     i++;
   }
   let j = 0;
   while (j < 1) {
     if (a < 10) {
       esMenorQueDiez = true;
     }
     j++;
   }
   if (esPositivo && esMenorQueDiez) {
     return true;
   } else {
     return false;
   }
}

module.exports = esPositivoOInferiorA10;
