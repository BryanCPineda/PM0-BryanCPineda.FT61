const { cajaFuerte,desbloquearCajaFuerte,validarNumerosRepetidos} = require("../../03. JS Bucles/cajaFuerte.js")

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