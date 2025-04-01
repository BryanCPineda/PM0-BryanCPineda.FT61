// <----- NO TOCAR ------->
const { perfiles } = require("../build/js/perfiles.js")

var asistente = {
    verPerfiles: function(opcion){
        /* TU CODIGO */
      // todo, nombre, codigo, nivel, antiguedad
        if(opcion === "todo") return perfiles

        if(opcion === "nombre"){
          var nuevoArray =  perfiles.map( function(perfil){
                      return perfil.usuario
            })
          return nuevoArray
        }

        if(opcion === "codigo") return perfiles.map( perfil => perfil.codigo  )
        if(opcion === "nivel") return perfiles.map( perfil => perfil.nivel_de_autorizacion  )
        if(opcion === "antiguedad") return perfiles.map( perfil => perfil.antiguedad  )
    },
    
    verPerfilesPorAntiguedad: function(){
        /* TU CODIGO */
        
        var nuevoArray = [...perfiles]

        // for (let i = 0; i < perfiles.length; i++) {
        //       nuevoArray.push( perfiles[i])
        // }

        nuevoArray.sort( function(a, b){
              return b.antiguedad - a.antiguedad
        })
        
        return nuevoArray

    },

    verAdministradores: function(){
        /* TU CODIGO */

        return perfiles.filter( perfil => perfil.nivel_de_autorizacion === "admin")

        // perfiles.filter( function(elemento){
        //       if(elemento.nivel_de_autorizacion === "admin") return elemento
        // })

    },

    modificarAcceso: function(usuario, codigo){
        /* TU CODIGO */
        
        var usuarioEncontrado = perfiles.find( perfil => perfil.usuario === usuario )

        if(!usuarioEncontrado) return "usuario no encontrado"

        if(codigo.length !== 4 || isNaN(codigo)) return "codigo de acceso invalido, debe contener solo 4 numeros"

        usuarioEncontrado.codigo = codigo

        return "codigo de acceso modificado" 
    }
}



// <----- NO TOCAR ------->
module.exports = {
    asistente
}

