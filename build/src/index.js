const { passGenDOM } = require("../js/genContrasenasDOM");
const { cajaFuerteDOM  } = require("../js/cajaFuerteDOM.js");
const { monitoreoActividadDOM } = require("../js/monitoreoActividadDOM.js");
const { gestionUsuariosDOM } = require("../js/gestionUsuariosDOM.js");

if(location.pathname.includes("/generar") ){
    passGenDOM()
} else if(location.pathname.includes("/cajaFuerte")){
    cajaFuerteDOM()
} else if(location.pathname.includes("/monitoreoActividad")){
    monitoreoActividadDOM()    
} else if(location.pathname.includes("/gestionUsuarios")){
    gestionUsuariosDOM()
}



