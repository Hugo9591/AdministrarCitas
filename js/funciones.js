import { citaObj, editando } from './variables.js';
import AdminCitas from './clases/AdminCitas.js'
import Notificacion from './clases/Notificacion.js';
import {pacienteInput,
        propietarioInput,
        emailInput,
        fechaInput,
        sintomasInput, 
        formulario,
        formularioInput
} from './selectores.js'

const InstaciaAdminCitas = new AdminCitas();

//Obtener inf del localStorage
let local = localStorage.getItem('cita');
InstaciaAdminCitas.citas = JSON.parse(local) || [];

if (local) {
    const citasGuardadas = JSON.parse(local);
    InstaciaAdminCitas.citas = citasGuardadas; // Carga las citas en la instancia
    InstaciaAdminCitas.mostrarCitas(); // Llama directamente a mostrar las citas
}

export function datosCita(e){
    citaObj[e.target.name] = e.target.value;
}

export function submitCita(e){
    e.preventDefault();
    
    //Validar Campos
    if(Object.values( citaObj ).some( valor => valor.trim() === '')){
        new Notificacion({
            texto: 'Todos Los Campos Son Obligatorios',
            tipo: 'error'
        });
        return;
    }

    if(editando.value){
        console.log('Editando Regitro');
        InstaciaAdminCitas.editar({...citaObj});
        new Notificacion({
            texto: 'Se Guardo Correctamente',
            tipo: ''
        });
    }else{
        console.log('Registro Nuevo');
        InstaciaAdminCitas.agregar({...citaObj});
        new Notificacion({
            texto: 'Se Agrego Cita',
            tipo: ''
        });
    }
    sincronizacionStorage();
    console.log(InstaciaAdminCitas.citas);

    formulario.reset();//Reinicia el formulario pero no el objeto
    reiniciarObjeto();//Reinicia el objeto
    formularioInput.value = 'Registrar Paciente';//Regresar el texto del boton
    editando.value = false; //Regresar el valor de la variable a false para qque no entre el if porque queda cmo true

}

export function sincronizacionStorage(){
    localStorage.setItem('cita', JSON.stringify(InstaciaAdminCitas.citas));
}

//Reinicia el objeto
// function reiniciarObjeto(){
//     citaObj.id = generarId();
//     citaObj.paciente = '';
//     citaObj.propietario = '';
//     citaObj.email = '';
//     citaObj.fecha = '';
//     citaObj.sintomas = '';
// }
export function reiniciarObjeto() {

    Object.assign(citaObj, {
        id: generarId(),
        paciente: '',
        propietario: '',
        email: '',
        fecha: '',
        sintomas: ''
    });
}

export function generarId(){
    return Math.random().toString(36).substring(2) + Date.now();
}

//Vuelve a llenar el formulario con los datos ya dados para modificarlos
export function cargarEdicion(obj){
    
    Object.assign(citaObj, obj);

    pacienteInput.value = obj.paciente;
    propietarioInput.value = obj.propietario;
    emailInput.value = obj.email;
    fechaInput.value = obj.fecha;
    sintomasInput.value = obj.sintomas;

    editando.value = true;//Sirve como variable auxiliar para saber que se esta editando esa informacion

    //Cambiar el texto del boton
    formularioInput.value = 'Guardar Cambios';
}