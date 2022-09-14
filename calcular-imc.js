//Calculo del IMC para pacientes 

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++)
{
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    pesoEsValido = validarPeso(peso);
    alturaEsValida = validarAltura(altura);
    
    if (!pesoEsValido)
    {
       console.log("peso incorrecto");
       tdImc.textContent = "Peso incorrecto";
       pesoEsValido = false;
       paciente.classList.add("paciente-incorrecto");
    }
    if (!alturaEsValida)
    {
       console.log("altura incorrecta");
       tdImc.textContent = "Altura incorrecta";
       alturaEsValida = false;
       paciente.classList.add("paciente-incorrecto");
    }
    
    if (pesoEsValido && alturaEsValida)
    {
        tdImc.textContent = calcularImc(peso,altura); //Reutilizamos la función para el calculo del IMC
    }
}
//Encapsulamos la lógica del calculo del IMC para ser reutilizado con los formularios nuevos a ser ingresados

function calcularImc(peso,altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}
// Reestructuramos formula para validar datos que ingresamos

function validarPeso(peso){
    if (peso > 0 && peso < 500 ){
        return true;
    } else{
        return false;
    }
}
function validarAltura(altura){
    if (altura > 0 && altura < 3 ){
        return true;
    } else{
        return false;
    }
}


