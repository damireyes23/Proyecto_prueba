//SELECCIONAR ELEMENTOS HTML
const nombre = document.getElementById("nombre")
const correo = document.getElementById("correo")
const telefono = document.getElementById("telefono")
const form = document.getElementById("formjs")
const parrafo = document.getElementById("warnings")
const warningnombre = document.getElementById("warningname")
const warningcorreo = document.getElementById("warningmail")
const warningtelefono = document.getElementById("warningphone")


//CANCELAR EVENTO POR DEFECTO
form.addEventListener("submit", e=>{
    e.preventDefault()

    //REINICIAR AVISOS
    let warnings = ""
    let warningname = ""
    let warningmail = ""
    let warningphone = ""

    //CREAR VARIABLE BOOLEANA
    let entrar = false

    //CREAR EXPRESIONES REGULARES
    let regexEmail = /([a-zA-Z0-9]+)([.{1}])?([a-zA-Z0-9]+)@(yahoo|hotmail|outlook|gmail|YAHOO|HOTMAIL|OUTLOOK|GMAIL)([.])com/
    let regexTelefono = /$^|^\d{10,10}$/
    let regexNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/

    //IMPRIMIR MENSAJE DE AVISO
    parrafo.innerHTML = ""
    warningnombre.innerHTML = ""
    warningcorreo.innerHTML = ""
    warningtelefono.innerHTML = ""

//CREAR CONDICIONES EN BASE A LAS EXPRESIONES REGULARES

    if(!regexNombre.test(nombre.value)){
        warningname += `El nombre ingresado es incorrecto (solo se admiten letras y espacios). <br>`
        entrar = "true"
    }
    if(!regexEmail.test(correo.value)){
    warningmail += `El correo ingresado no es válido (solo se admiten dominios de GMAIL, YAHOO y Outlook). <br>`
    correo.style.border = '1px solid red'
    entrar = true
    }
    if(!regexTelefono.test(telefono.value)){
        warningphone += `Su teléfono debe contener 10 caracteres (solo se admiten números). <br>`
        entrar = true
    }

    //MOSTRAR AVISOS EN VARIABLE WARNINGS
    if(entrar){
        parrafo.innerHTML = warnings
        warningnombre.innerHTML = warningname
        warningcorreo.innerHTML = warningmail
        warningtelefono.innerHTML = warningphone
    }

    //CREAR CONDICIONAL PARA MOSTRAR QUE LOS DATOS FUERON VALIDADOS CORRECTAMENTE
    else{
        parrafo.innerHTML = "Enviado! Nos comunicaremos con usted a la brevedad!"
        document.getElementById("formjs").reset();
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