//Creamos formulario para nuestra tabla.

var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click",function(event){
    event.preventDefault();

   //Creando mi formulario
    var form = document.querySelector("#form-adicionar");
    // Creando un objeto paciente
    var paciente = capturarDatosPaciente(form);
   
    //Validamos datos ingresados
    var errores = validarPaciente(paciente);
    if (errores.length > 0){
        exhibirMensajesErrores(errores);
        return;
    }

    adicionarPacienteEnLaTabla(paciente)//Llamamos la funcion
    form.reset();

    var mensajesErrores = document.querySelector("#mensajes-errores");
    mensajesErrores.innerHTML = "";

});
//Incorporamos una nueva funcion para incorporar nuevos pacientes desde AJAX
function adicionarPacienteEnLaTabla(paciente){
    var pacienteTr = construirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes"); 
    tabla.appendChild(pacienteTr);
}

 //Le damos valor a nuestro formulario para cargar datos
function capturarDatosPaciente(form){
  // Creamos una clase paciente y colocamos dentro de ella los atributos
    var paciente = {
        nombre: form.nombre.value,      
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value,form.altura.value)
    }
    return paciente;
}

function construirTr(paciente){
    // Creamos etiquetas html
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
   
    //Asociamos ahora a través de la funcion los valores a la tabla
    pacienteTr.appendChild(construirTd(paciente.nombre,"info-nombre"));
    pacienteTr.appendChild(construirTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(construirTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(construirTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(construirTd(paciente.imc,"info-imc"));

    return pacienteTr;
}

function construirTd(dato,clase){
      var td = document.createElement("td");
      td.classList.add(clase);
      td.textContent = dato;
      return td;
}

function validarPaciente(paciente){
    var errores = [];
    if (paciente.nombre.length == 0){
        errores.push("El nombre no puede estar vacio");
    }
    if (paciente.peso.length == 0){
        errores.push("El peso no puede estar vacio");
    }
    if (paciente.altura.length == 0){
        errores.push("La altura no puede estar vacio");
    }
    if (paciente.gordura.length == 0){
        errores.push("El % gordura no puede estar vacio");
    }
    if (!validarPeso(paciente.peso)){
        errores.push("El peso es incorrecto");
    }
    if (!validarAltura(paciente.altura)){
        errores.push("La altura es incorrecta");
    }
        
    return errores;
}

function exhibirMensajesErrores(errores){
    var ul = document.querySelector("#mensajes-errores");
    ul.innerHTML = "";
    errores.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}