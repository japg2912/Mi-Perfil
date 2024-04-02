var nombre = document.getElementById('nombre');
var correo = document.getElementById('correo');
var mensaje = document.getElementById('mensaje');
var error = document.getElementById('error');
error.style.color = 'red';
 
var form = document.getElementById("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
  });

function enviarFormulario(){

    var mensajesError = [];
    
    if(nombre.value === null || nombre.value === ''){
    mensajesError.push('ingresa tu nombre');
    }
    if(correo.value === null || correo.value === ''){
        mensajesError.push('ingresa tu correo');

    }
    if(mensaje.value === null || mensaje.value === ''){
        mensajesError.push('ingresa tu mensaje');
    }

    error.innerHTML = mensajesError.join(' , ');
    consulta =[nombre.value, correo.value, mensaje.value]
    console.log(consulta);

}