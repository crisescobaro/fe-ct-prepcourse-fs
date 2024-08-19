function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  let dia;
  switch(numero){
    case 1:
      dia = "Lunes";
      break;
      case 2:
      dia = "Martes";
      break;
      case 3:
      dia = "Miercoles"   
      break;
      case 4: 
      dia = "Jueves"
      break;
      case 5: 
      dia = "Viernes"
      break;
      case 6:
      dia = "Sabado"
      break;
      case 7:
      dia = "Domingo"
      break;
      default:
      return "No es un dia de la semana"
  }
  return dia;
}

module.exports = obtenerDiaSemana;