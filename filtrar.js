var campoFiltro = document.querySelector("#filtrar-tabla");

campoFiltro.addEventListener("input", function(){
   
     var pacientes = document.querySelectorAll(".paciente");
     //Verifica si existe el paciente en la lista y lo muestra
     if(this.value.length > 0){
        for(var i = 0; 1 < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNombre = paciente.querySelector(".info-nombre");
            var nombre = tdNombre.textContent;
            var expresion = new RegExp(this.value,"i");  // Capturamos la expresion y con la "i" no distingue M o m
            // Corroboramos si la expresion existe en el nombre
            if (!expresion.test(nombre)){
                paciente.classList.add("invisible");
            }else{
                paciente.classList.remove("invisible");
            }
         }
     }else      //Me vuelve visible toda la lista de pacientes.
     {
        for(var i = 0; 1 < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisible");
     }
    }
     
});