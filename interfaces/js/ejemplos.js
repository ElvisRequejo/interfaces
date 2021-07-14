$(document).ready(function(){

});
$("#boton").click(function(){
    var user = $("#username").val();
    var pass = $("#password").val();
    $("#boton").removeClass("btn-primary");
    $("#boton").addClass("btn-danger");
    alert(user+"/ " +pass);
});


//Ocultar 
    $("#c1").click(function() {
    $("#imguser").hide(1500);
    });
    
//Mostrar 
    $("#c2").click(function() {
    $("#imguser").show("slow");
    });
