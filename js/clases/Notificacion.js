import { formulario } from "../selectores.js";

export default class Notificacion{

    constructor({texto, tipo}){
        this.texto = texto;
        this.tipo = tipo;

        this.mostrar();
    }

    mostrar(){

        const alerta = document.createElement('DIV');

        alerta.classList.add('rounded-lg','alert','text-center', 'w-full', 'p-3', 'text-white', 'my-5',
                             'uppercase', 'font-bold', 'text-sm', 'animacion');
        
        const alertaPrevia = document.querySelector('.alert');
        alertaPrevia?.remove();//Si existe el elemento se elimina

        this.tipo === 'error' ? alerta.classList.add('bg-red-500') : alerta.classList.add('bg-green-500');

        //Agregar texto a la alerta
        alerta.textContent = this.texto;

        //Insertar ne el DOM antes del formulario
        // formulario.parentElement.insertBefore(alerta, formulario);
        // formulario.insertBefore(alerta, document.querySelector('#botonSubmit'))
        formulario.appendChild(alerta);

        setInterval(() => {
            alerta.remove();
        }, 3000);
    }
}