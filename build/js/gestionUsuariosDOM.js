const { asistente } = require("../../05. JS Objetos/gestionUsuarios.js")

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