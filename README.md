# Administrar Citas

## Descripción
Una página web para registrar mascotas en una clínica veterinaria. Los usuarios ingresan datos como el nombre del paciente, propietario, email, fecha de alta, y síntomas. 
Toda la información es validada antes de registrarse y se muestra en una tarjeta. Las tarjetas incluyen efectos hover con iconos para editar o eliminar registros. 
Los datos pueden editarse fácilmente o eliminarse con confirmación previa. Toda la información se guarda en el Local Storage para persistencia. 
La aplicación utiliza JavaScript con clases para la lógica y Tailwind CSS para los estilos.

## Características
- Formulario de registro: Los usuarios completan los siguientes campos:
  - Nombre del paciente.
  - Nombre del propietario.
  - Email.
  - Fecha de alta.
  - Síntomas.
- Validación de datos: Todos los campos son obligatorios y se validan mediante JavaScript antes de registrar la información.
- Visualización de registros:
  - Los datos registrados se muestran en tarjetas.
- Las tarjetas tienen un efecto hover que muestra iconos para editar o eliminar.
- Edición de registros:
  - Al presionar el icono de editar (lápiz), los datos se rellenan automáticamente en el formulario.
  - Los cambios se guardan y se actualiza la tarjeta correspondiente.
- Eliminación de registros:
  - Al presionar el icono de eliminar (X), aparece una confirmación para evitar eliminaciones accidentales.
  - Si se confirma, el registro se elimina mediante su ID único.
- Persistencia: Todos los datos se almacenan en el Local Storage para mantenerlos después de recargar la página.
  
## Tecnologías utilizadas
- HTML: Estructura Pricnipal
- JavaScript: Toda la lógica está implementada mediante clases.
- Tailwind CSS: Los estilos principales están definidos en un archivo output.css.
- Local Storage: Para persistir los datos registrados.
  
## Uso
1. Abre la página web en tu navegador.
2. Completa todos los campos del formulario de registro y haz clic en el botón Registrar Paciente.
  - Los datos se mostrarán en una tarjeta del lado derecho.
3. Opciones disponibles en las tarjetas:
  - Editar: Haz clic en el icono de lápiz para modificar los datos del paciente. Los datos se rellenarán automáticamente en el formulario.
  - Eliminar: Haz clic en el icono de la "X" para eliminar el registro. Aparecerá una confirmación antes de proceder.
4. Los datos se guardarán automáticamente en el Local Storage y estarán disponibles al recargar la página.

## Instalación
1. Clona este repositorio:
git clone https://github.com/Hugo9591/AdministrarCitasLocalStorage.git

2. Abre el archivo index.html en tu navegador para iniciar la aplicación.

## Ejemplo de uso
1. Registra un paciente llamado "Max" con los datos:
2. Propietario: Ana Pérez
3. Email: ana@mail.com
4. Fecha: 01/01/2024
5. Síntomas: Fiebre y vómito.
6. Edita los datos para cambiar los síntomas a "Pérdida de apetito".
7. Elimina el registro de "Max" si ya no es necesario.
