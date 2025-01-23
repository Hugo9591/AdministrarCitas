import { generarId } from "./funciones.js"

let editando = {
    value: false
}

//Objeto para almacenar datos
let citaObj = {
    id: generarId(),
    paciente: '',
    propietario: '',
    email:'',
    fecha: '',
    sintomas:''
}

export{
    editando,
    citaObj
}