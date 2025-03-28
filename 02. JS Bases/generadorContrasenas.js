function checkLongitud(longitud) {
  /* TU CODIGO */
  if(!longitud) return 'debe ingresar la longitud'
  if(typeof longitud !== "string") return "La longitud recibida no es válida"
  if(longitud < 3) return "La longitud debe ser mayor o igual a 3"
  if(longitud > 10) return "La longitud debe ser menor o igual a 10"
  return longitud

}

function generarContrasena(longitud, incluirEspeciales, incluirNumeros, incluirMayusculas ) {
  /* TU CODIGO */
  var letras = "abcdefghijklmnopqrstuvwxyz";

  var numeros = '1234567890';

  var especiales = '!@#$%^&*()_+=';

  var letrasMayusculas = letras.toUpperCase()

  var caracteresDisponibles = letras; 

  if (incluirEspeciales) caracteresDisponibles = caracteresDisponibles + especiales
  if (incluirNumeros) caracteresDisponibles = caracteresDisponibles + numeros
  if (incluirMayusculas) caracteresDisponibles = caracteresDisponibles + letrasMayusculas
  
  var contrasena = '';

  for(var i=0; i < longitud; i++){
    var numeroAleatorio = Math.random() * caracteresDisponibles.length
    var numeroEntero = Math.round(numeroAleatorio)
    var caracter = caracteresDisponibles.charAt(numeroEntero)
    contrasena = contrasena + caracter
  }

  return "Contraseña generada: " + contrasena;
}

// <------- NO TOCAR -------->
module.exports = {
  checkLongitud,
  generarContrasena,
};
