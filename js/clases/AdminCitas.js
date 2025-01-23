import { contenedorCitas } from "../selectores.js";
import { cargarEdicion, sincronizacionStorage } from "../funciones.js";

export default class AdminCitas{

    constructor(){
        this.citas = [];
    }

    agregar(cita){
        this.citas = [...this.citas, cita];

        this.mostrarCitas();
    }


    mostrarCitas(){

        this.limpiarHTML();

        //Regresar el parrafo del contenedor de pacientes si no hay citas
        if(this.citas.length === 0){
            contenedorCitas.innerHTML = '<p class="text-xl mt-5 mb-10 text-center">No Hay Pacientes</p>';
            return;
        }

        //Agregar inf del input en contenedor pacientes(c/elemento en el arreglo)    
        this.citas.forEach(cita => {

            const divCita = document.createElement('div');
            divCita.classList.add('targeta','mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5','rounded-xl', 'p-3');
        
            const paciente = document.createElement('p');
            paciente.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            paciente.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${cita.paciente || 'sin nombre'} `;
        
            const propietario = document.createElement('p');
            propietario.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            propietario.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${cita.propietario}`;
        
            const email = document.createElement('p');
            email.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            email.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${cita.email}`;
        
            const fecha = document.createElement('p');
            fecha.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            fecha.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${cita.fecha}`;
        
            const sintomas = document.createElement('p');
            sintomas.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            sintomas.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${cita.sintomas}`;


            //Botones de eliminar y de editar
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
            const clone = structuredClone(cita);//Toma una copia completa de un arreglo
            //o tambien se ppuede usar spreadOperator const clone = {...cita};
            btnEditar.onclick = () => cargarEdicion(clone);
            btnEditar.innerHTML = '<svg fill="none" class="h-5 " stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'


            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
            btnEliminar.innerHTML = '<svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
            
            btnEliminar.onclick = () => {
                const confirmar = confirm('¿Seguro que quieres eliminar el Registro?');
                if(confirmar){
                    this.eliminar(cita.id);
                    sincronizacionStorage();
                    }
            }
            
            
            

            //Agregar btn eliminar y editar en contenedorBtn
            const contenedorBtn = document.createElement('DIV');
            contenedorBtn.classList.add('contenedor-boton','flex', 'justify-content');
            contenedorBtn.appendChild(btnEditar);
            contenedorBtn.appendChild(btnEliminar);


            // Agregar elementos al HTML
            divCita.appendChild(contenedorBtn);//Agregar botenes al contenedor
            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(email);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);
            
            contenedorCitas.appendChild(divCita);
        });
        
    }

    editar(citaActualizada){
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita);
        
        this.mostrarCitas();
    }

    eliminar(id){
        this.citas = this.citas.filter( cita => cita.id !== id);
        this.mostrarCitas();
    }

    limpiarHTML(){
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }
}  