const { agregarActividad, eliminarActividad, filtrarActividadesPorRiesgo, generarReporteDeActividades } = require("../../04. JS Arrays/monitoreoActividad.js")

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