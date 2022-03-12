var formulario = document.getElementById('form-login')
var pass = document.getElementById('pass-login')
var nombre = document.getElementById('nombre-login')
var email = document.getElementById('email-login')
var nac = document.getElementById('date-login')
var err = document.getElementById('err-pass')
var errE = document.getElementById('err-email')
const fecha = new Date()
var aActual = fecha.getFullYear()

var expMay = RegExp("[A-Z]")
var expMin = RegExp("[a-z]")
var expNum = RegExp("[0-9]")
var expMail = RegExp("([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)\.([a-zA-Z0-9]){3}")
var expNac = RegExp("^\d{4}([-])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$")


formulario.addEventListener('submit', function(evento) {
    evento.preventDefault()

    var error = ""

    if (!pass.value.match(expMay)) {
        error += "Debe tener una mayuscula "
    }
    if (!pass.value.match(expMin)) {
        error += "Debe tener una minuscula "
    }
    if (!pass.value.match(expNum)) {
        error += "Debe tener un numero "
    }
    if (error == "") {
        window.comunicacion.registroValido([nombre.value]);
    } else {
        err.innerHTML = error
    }

    var errorE = ""
    if (!email.value.match(expMail)) {
        errorE += "debe de cumplir con el formato de correo electronico "
        errE.innerHTML = errorE
    } else {
        
    }
    
    

})

