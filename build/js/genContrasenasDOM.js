const {checkLongitud , generarContrasena } = require("../../02. JS Bases/generadorContrasenas.js")

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