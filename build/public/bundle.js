/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../02. JS Bases/generadorContrasenas.js":
/*!***********************************************!*\
  !*** ../02. JS Bases/generadorContrasenas.js ***!
  \***********************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (18:6)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n|   var caracteresDisponibles = null;\n| \n>   if () {\n|       \n|   }");

/***/ }),

/***/ "../03. JS Bucles/cajaFuerte.js":
/*!**************************************!*\
  !*** ../03. JS Bucles/cajaFuerte.js ***!
  \**************************************/
/***/ ((module) => {

function cajaFuerte(codigoSecreto, cantidadIntentos){
  /* TU CODIGO */
  
}

function validarNumerosRepetidos(codigo){
  /* TU CODIGO */
  
}

// <------- Contador de intentos -----> no modificar
var contadorIntentos = 1

function desbloquearCajaFuerte(codigoSecreto, cantidadIntentos, codigoDesbloqueo){
  /* TU CODIGO */
  
}

// <------- NO TOCAR -------->
module.exports = {
  cajaFuerte,
  desbloquearCajaFuerte,
  validarNumerosRepetidos
}

/***/ }),

/***/ "../04. JS Arrays/monitoreoActividad.js":
/*!**********************************************!*\
  !*** ../04. JS Arrays/monitoreoActividad.js ***!
  \**********************************************/
/***/ ((module) => {

// <------- Arreglo de actividades sospechozas -----> modificar el valor de ser necesario
var actividadesSospechozas = null

function agregarActividad(descripcion, nivelRiesgo){
    /* TU CODIGO */
    
}

function eliminarActividad(indice){
    /* TU CODIGO */
    
}

function filtrarActividadesPorRiesgo(nivelRiesgo){
    /* TU CODIGO */
    
}

function generarReporteDeActividades(){
    /* TU CODIGO */
    
}

// <------- NO TOCAR -------->
module.exports = {
  agregarActividad,
  eliminarActividad,
  filtrarActividadesPorRiesgo,
  generarReporteDeActividades
}






/***/ }),

/***/ "../05. JS Objetos/gestionUsuarios.js":
/*!********************************************!*\
  !*** ../05. JS Objetos/gestionUsuarios.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// <----- NO TOCAR ------->
const { perfiles } = __webpack_require__(/*! ../build/js/perfiles.js */ "./js/perfiles.js")

var asistente = {
    verPerfiles: function(opcion){
        /* TU CODIGO */
      
    },
    
    verPerfilesPorAntiguedad: function(){
        /* TU CODIGO */
        
    },

    verAdministradores: function(){
        /* TU CODIGO */

    },

    modificarAcceso: function(usuario, codigo){
        /* TU CODIGO */
        
    }
}

// <----- NO TOCAR ------->
module.exports = {
    asistente
}



/***/ }),

/***/ "./js/cajaFuerteDOM.js":
/*!*****************************!*\
  !*** ./js/cajaFuerteDOM.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { cajaFuerte,desbloquearCajaFuerte,validarNumerosRepetidos} = __webpack_require__(/*! ../../03. JS Bucles/cajaFuerte.js */ "../03. JS Bucles/cajaFuerte.js")

let outPutCodigoSecreto
let outPutCantidadIntentos

const cajaFuerteDOM = () => {
  const guardarButton = document.getElementById("guardar")
  guardarButton.addEventListener("click", () =>{

  const inputCodigoSecreto = document.getElementById("codigoSecreto")
  const inputCantidadIntentos = document.getElementById("cantidadIntentos")
  
  const resultCajaFuerte = cajaFuerte(inputCodigoSecreto.value, Number(inputCantidadIntentos.value))
  
  if(typeof resultCajaFuerte !== "string") return 
  if(resultCajaFuerte.includes("codigo debe tener") ) return alert(resultCajaFuerte)
  if(resultCajaFuerte.includes("codigo secreto solo puede estar") ) return alert(resultCajaFuerte)
  if(resultCajaFuerte.includes("se permite una cantidad de intentos") ) return alert(resultCajaFuerte)
  if(resultCajaFuerte.includes("codigo no puede tener numeros repetidos") ) return alert(resultCajaFuerte)

  inputCodigoSecreto.value = '⚫⚫⚫⚫'
  inputCodigoSecreto.disabled = true
  inputCantidadIntentos.disabled = true
  guardarButton.disabled = true


  outPutCodigoSecreto = resultCajaFuerte.slice(0,4)
  outPutCantidadIntentos = resultCajaFuerte.slice(4,6)
    
  })


  document.getElementById("reset").addEventListener("click", () =>{
    location.reload()
  })

  const inputCantidadIntentos = document.getElementById("cantidadIntentos")

  document.getElementById("validar").addEventListener("click", () => {
    const codigoDesbloqueo = document.getElementById("codigoDesbloqueo")

    const resultDesbloquearCF = desbloquearCajaFuerte(outPutCodigoSecreto,  parseInt(outPutCantidadIntentos,10), codigoDesbloqueo.value)

    if(resultDesbloquearCF?.includes("codigo debe tener") ) return alert(resultDesbloquearCF)
    if(resultDesbloquearCF?.includes("codigo de desbloqueo solo puede estar") ) return alert(resultDesbloquearCF)
    if(resultDesbloquearCF?.includes("codigo no puede tener numeros repetidos") ) return alert(resultDesbloquearCF)

      if(resultDesbloquearCF?.includes("Acceso concedido despues de") ) {
      location.reload()
      return alert(resultDesbloquearCF)
    }

    if(resultDesbloquearCF?.includes("Acceso denegado. Se agotaron los intentos") ) {
      location.reload()
      return alert(resultDesbloquearCF)
    }

    let intentosRestantes = parseInt(inputCantidadIntentos.value,10)
    intentosRestantes--
    inputCantidadIntentos.value = intentosRestantes
  })

}


module.exports = {
  cajaFuerteDOM
}

/***/ }),

/***/ "./js/genContrasenasDOM.js":
/*!*********************************!*\
  !*** ./js/genContrasenasDOM.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {checkLongitud , generarContrasena } = __webpack_require__(/*! ../../02. JS Bases/generadorContrasenas.js */ "../02. JS Bases/generadorContrasenas.js")

const passGenDOM = () => {
  document.querySelector("#generar").addEventListener("click", () => {
      const longitud = document.querySelector("#longitud").value
      const especiales = document.querySelector("#especiales").checked
      const numeros = document.querySelector("#numeros").checked
      const mayusculas = document.querySelector("#mayusculas").checked
      const contrasena = document.querySelector("#contrasena")
      
      const checkLong = checkLongitud(longitud)
      if(typeof checkLong !== "string" ) return
      if(typeof checkLong === "string" && longitud === "") return alert(checkLong)
      if(checkLong.includes("la longitud recibida no es valida")) return alert(checkLong)    
      if(checkLong.includes("longitud debe ser")) return alert(checkLong)    
      
      const result =  generarContrasena(longitud, especiales, numeros, mayusculas)
      contrasena.innerText = result
      
      return
  })

}

module.exports = {
  passGenDOM
}

/***/ }),

/***/ "./js/gestionUsuariosDOM.js":
/*!**********************************!*\
  !*** ./js/gestionUsuariosDOM.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { asistente } = __webpack_require__(/*! ../../05. JS Objetos/gestionUsuarios.js */ "../05. JS Objetos/gestionUsuarios.js")

const gestionUsuariosDOM = () => { 

    const mostrar = document.getElementById("mostrar")
    const construirPerfilHtml = (array) => {
      let html = ""
      if(array[0].usuario){
        for(let i = 0; i < array.length; i++){
            html += `<li> ${array[i].usuario} - ${array[i].codigo} - ${array[i].nivel_de_autorizacion} - ${array[i].antiguedad} </li>`
        }
      } else {
          for(let i = 0; i < array.length; i++){
            html += `<li> ${array[i]} </li>`
          }
      } 
      return html
    }

    document.getElementById("ver").addEventListener("click", () => {
        const opcion = document.getElementById("opcion")
        const resultAsistenteVerPerfiles = asistente.verPerfiles(opcion.value)
        if(!resultAsistenteVerPerfiles) return mostrar.innerHTML = ""
        mostrar.innerHTML = ""
        if(opcion.value === "todo"){
          mostrar.innerHTML += `
          <ul> 
            <li> Usuario - Codigo - Nivel de autorizacion - Antiguedad ( meses ) </li>
            <hr>
            ${construirPerfilHtml(resultAsistenteVerPerfiles)} 
          </ul>
          `
        }else{
          mostrar.innerHTML += `
          <ul> 
            <li> ${opcion.value} </li>
            <hr>
            ${construirPerfilHtml(resultAsistenteVerPerfiles)} 
          </ul>
          `
        }
    })

    document.getElementById("verAntiguedad").addEventListener("click", () => {
        const resultAsistenteVerPerfilesPorAntiguedad = asistente.verPerfilesPorAntiguedad()
        mostrar.innerHTML = ""
        mostrar.innerHTML += `
        <ul> 
          <li> Usuario - Codigo - Nivel de autorizacion - Antiguedad ( meses ) </li>
          <hr>
          ${construirPerfilHtml(resultAsistenteVerPerfilesPorAntiguedad)} 
        </ul>
        `
    })

    document.getElementById("verAdministradores").addEventListener("click", () => {
        const resultAsistenteVerAdministradores = asistente.verAdministradores()
        mostrar.innerHTML = ""
        mostrar.innerHTML += `
        <ul> 
          <li> Usuario - Codigo - Nivel de autorizacion - Antiguedad ( meses ) </li>
          <hr>
          ${construirPerfilHtml(resultAsistenteVerAdministradores)} 
        </ul>
        `
    })

    document.getElementById("actualizarAcceso").addEventListener("click", () => {
        const usuario = document.getElementById("usuario")
        const codigo = document.getElementById("codigo")
        const resultAsistenteModificarAcceso = asistente.modificarAcceso(usuario.value.trim(), codigo.value.trim())

        if(resultAsistenteModificarAcceso?.includes("usuario no encontrado")) return alert(resultAsistenteModificarAcceso)
        if(resultAsistenteModificarAcceso?.includes("codigo de acceso invalido")) return alert(resultAsistenteModificarAcceso)
        if(resultAsistenteModificarAcceso?.includes("codigo de acceso modificado")){ 
          usuario.value = ""
          codigo.value = ""
          alert(resultAsistenteModificarAcceso)
        }
    })
}


module.exports = {
    gestionUsuariosDOM 
}

/***/ }),

/***/ "./js/monitoreoActividadDOM.js":
/*!*************************************!*\
  !*** ./js/monitoreoActividadDOM.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { agregarActividad, eliminarActividad, filtrarActividadesPorRiesgo, generarReporteDeActividades } = __webpack_require__(/*! ../../04. JS Arrays/monitoreoActividad.js */ "../04. JS Arrays/monitoreoActividad.js")

const monitoreoActividadDOM = () => {

    const mostrar = document.getElementById("mostrar")
    document.getElementById("agregar").addEventListener("click", () => {
        mostrar.innerText = "" 
        
        const descripcion = document.getElementById("descripcion")
        const nivelRiesgo = document.getElementById("nivelRiesgo")

        const resultAgregarActividad = agregarActividad(descripcion.value.trim().toLowerCase(), nivelRiesgo.value.trim().toLowerCase())

        if(resultAgregarActividad?.includes("Descripcion o nivel de riesgo no valido"))  alert(resultAgregarActividad)
        else if(resultAgregarActividad?.includes("Nivel de riesgo no valido"))  alert(resultAgregarActividad)
        else if(resultAgregarActividad?.includes("Actividad: "))  alert(resultAgregarActividad)
        descripcion.value = ""
        nivelRiesgo.value = ""

    })

    document.getElementById("eliminar").addEventListener("click", () => { 
        mostrar.innerText = "" 

        const indice = document.getElementById("indice")
        let resultEliminarActividad

        if(indice.value === "") resultEliminarActividad = eliminarActividad(indice.value)
        else if(isNaN(Number(indice.value,10))) resultEliminarActividad = eliminarActividad(indice.value)
        else resultEliminarActividad = eliminarActividad(Number(indice.value,10))

        if(resultEliminarActividad?.includes("debe ser un numero")) alert(resultEliminarActividad)
        if(resultEliminarActividad?.includes("se encuentra fuera del rango"))  alert(resultEliminarActividad)
        if(resultEliminarActividad?.includes("Actividad eliminada con exito"))  alert(resultEliminarActividad)
        indice.value = ""
    })

    document.getElementById("filtrar").addEventListener("click", () => { 
        mostrar.innerText = "" 

        const nivel = document.getElementById("nivel")

        const resultFiltrarActividades = filtrarActividadesPorRiesgo(nivel.value.trim().toLowerCase())
        if(resultFiltrarActividades?.includes("Nivel de riesgo no valido"))  alert(resultFiltrarActividades)
        if(resultFiltrarActividades?.includes("No hay actividades con este nivel de riesgo")) alert(resultFiltrarActividades)
        
        if(Array.isArray(resultFiltrarActividades) && resultFiltrarActividades.length > 0){
            
            for(let i = 0; i < resultFiltrarActividades.length; i++){
                document.getElementById("mostrar").innerHTML += resultFiltrarActividades[i] + "<br>"
            }
        }
        nivel.value = ""
    })

    document.getElementById("generar").addEventListener("click", () => {
        mostrar.innerText = "" 
        const resultGenerarReporte = generarReporteDeActividades()
        if(resultGenerarReporte?.includes("No hay actividades para mostrar")) return alert(resultGenerarReporte)
        if(Array.isArray(resultGenerarReporte) && resultGenerarReporte.length > 0){
          for(let i = 0; i < resultGenerarReporte.length; i++){
              document.getElementById("mostrar").innerHTML += resultGenerarReporte[i] + "<br>"
          }
        }

    })
}

module.exports = {
    monitoreoActividadDOM 
}

/***/ }),

/***/ "./js/perfiles.js":
/*!************************!*\
  !*** ./js/perfiles.js ***!
  \************************/
/***/ ((module) => {

var perfiles = [
  { usuario: "Alice", codigo: 1234, nivel_de_autorizacion: "bajo", antiguedad: 12 },
  { usuario: "Bob", codigo: 5678, nivel_de_autorizacion: "medio", antiguedad: 24 },
  { usuario: "Charlie", codigo: 9101, nivel_de_autorizacion: "alto", antiguedad: 36 },
  { usuario: "Diana", codigo: 1122, nivel_de_autorizacion: "admin", antiguedad: 48 },
  { usuario: "Eve", codigo: 3344, nivel_de_autorizacion: "bajo", antiguedad: 6 },
  { usuario: "Frank", codigo: 5566, nivel_de_autorizacion: "medio", antiguedad: 12 },
  { usuario: "Grace", codigo: 7788, nivel_de_autorizacion: "alto", antiguedad: 18 },
  { usuario: "Hank", codigo: 9900, nivel_de_autorizacion: "admin", antiguedad: 30 },
  { usuario: "Ivy", codigo: 1235, nivel_de_autorizacion: "bajo", antiguedad: 36 },
  { usuario: "Jack", codigo: 5679, nivel_de_autorizacion: "medio", antiguedad: 48 },
  { usuario: "Karen", codigo: 9102, nivel_de_autorizacion: "alto", antiguedad: 6 },
  { usuario: "Leo", codigo: 1123, nivel_de_autorizacion: "admin", antiguedad: 24 },
  { usuario: "Mona", codigo: 3345, nivel_de_autorizacion: "bajo", antiguedad: 30 },
  { usuario: "Nina", codigo: 5567, nivel_de_autorizacion: "medio", antiguedad: 18 },
  { usuario: "Oscar", codigo: 7789, nivel_de_autorizacion: "alto", antiguedad: 12 },
];

module.exports = {
  perfiles
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const { passGenDOM } = __webpack_require__(/*! ../js/genContrasenasDOM */ "./js/genContrasenasDOM.js");
const { cajaFuerteDOM  } = __webpack_require__(/*! ../js/cajaFuerteDOM.js */ "./js/cajaFuerteDOM.js");
const { monitoreoActividadDOM } = __webpack_require__(/*! ../js/monitoreoActividadDOM.js */ "./js/monitoreoActividadDOM.js");
const { gestionUsuariosDOM } = __webpack_require__(/*! ../js/gestionUsuariosDOM.js */ "./js/gestionUsuariosDOM.js");

if(location.pathname.includes("/generar") ){
    passGenDOM()
} else if(location.pathname.includes("/cajaFuerte")){
    cajaFuerteDOM()
} else if(location.pathname.includes("/monitoreoActividad")){
    monitoreoActividadDOM()    
} else if(location.pathname.includes("/gestionUsuarios")){
    gestionUsuariosDOM()
}




})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map