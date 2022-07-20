//SELECCIONAR ELEMENTOS HTML
const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const telefono = document.getElementById("telefono")
const form = document.getElementById("formjs")
const parrafo = document.getElementById("warnings")

//CANCELAR EVENTO POR DEFECTO
form.addEventListener("submit", e=>{
    e.preventDefault()
//REINICIAR AVISOS
    let warnings = ""
//CREAR VARIABLE BOOLEANA
    let entrar = false
//CREAR EXPRESIONES REGULARES
    let regexEmail = /([a-zA-Z0-9]+)([.{1}])?([a-zA-Z0-9]+)@(yahoo|hotmail|outlook|gmail)([.])com/
    let regexTelefono = /^\d{10,10}$/
    let regexNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
//IMPRIMIR MENSAJE DE AVISO
    parrafo.innerHTML = ""
//CREAR CONDICIONES EN BASE A LAS EXPRESIONES REGULARES    
    if(!regexNombre.test(nombre.value)){
        warnings += `El nombre ingresado es incorrecto. Solo se admiten letras y espacios. <br>`
        entrar = "true"
    }
    if(!regexEmail.test(correo.value)){
    warnings += `El email ingresado no es válido (solo se admiten dominios de GMAIL, YAHOO y Outlook). <br>`
    entrar = true
    }
    if(!regexTelefono.test (telefono.value)){
        warnings += `Su teléfono debe contener 10 caracteres (solo se permiten números). <br>`
        entrar = true
    }
//MOSTRAR AVISOS EN VARIABLE WARNINGS
    if(entrar){
        parrafo.innerHTML = warnings}
//CREAR CONDICIONAL PARA MOSTRAR QUE LOS DATOS FUERON VALIDADOS CORRECTAMENTE
    else{
        parrafo.innerHTML = "Enviado! Nos comunicaremos con usted a la brevedad!"
    }
})





//CONTAR CARACTERES DEL FORMULARIO DE MENSAJE
const mensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador');

mensaje.addEventListener('input', function(e) {
    const target = e.target;
    const longitudMax = target.getAttribute('maxlength');
    const longitudAct = target.value.length;
    contador.innerHTML = `${longitudAct}/${longitudMax}`;
});