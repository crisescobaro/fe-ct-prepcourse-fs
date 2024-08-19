function conection(status) {
  // El argumento "status" representa el estado de conexión de un usuario.
  // Si el estado es igual a 1, el usuario está "Online".
  // Si el estado es igual a 2, el usuario está "Away".
  // De lo contrario, presumimos que el usuario está "Offline".
  // Retornar el estado de conexión del usuario.
  // Tu código:
  let estado = "Offline";
  let i = 0;
  while (i < 1) {
    if (status === 1) {
      estado = "Online";
      break;
    } else if (status === 2) {
      estado = "Away";
      break;
    }
    i++;
  }
  return estado;
}

module.exports = conection;
