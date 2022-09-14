var tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("dblclick", function(event){
    alert("Esta seguro que desea eliminar un paciente");
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    },500);
 });
