function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años o más, retorna el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:
  let resultado = "Not allowed";
  let i = edad;
  while (i >= 18) {
    resultado = "Allowed";
    break;
  }
  return resultado;
}


module.exports = mayoriaDeEdad;
