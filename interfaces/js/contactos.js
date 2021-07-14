var nom = document.getElementById("nombres");
var cor = document.getElementById("correo");
var telf = document.getElementById("telefono");
var table = document.getElementById("table");
var tbd = document.getElementById("tbd");
var i = 0;
var filita = "";
var estado = 0;
function registrar() {
    if (estado == 0) {
        var table = document.getElementById("table");
        var tbd = document.getElementById("tbd");
        var fila = document.createElement("tr");


        var celda_nombres = document.createElement("td");
        celda_nombres.innerHTML = nom.value;

        var celda_correo = document.createElement("td");
        celda_correo.innerHTML = cor.value;

        var celda_telefono = document.createElement("td");
        celda_telefono.innerHTML = telf.value;

        var celda_accion = document.createElement("td");
        celda_accion.classList.add("accion");
        celda_accion.innerHTML=
        "<a href='#' class='icono2' onclick='editar(this)'><i class='fa fa-pencil-square-o' aria-hidden='true'></i></a>"
        +"<a href='#' class='icono1' onclick='eliminar(this)'><i class='fa fa-trash' aria-hidden='true'></i></a>";
        fila.appendChild(celda_nombres);
        fila.appendChild(celda_correo);
        fila.appendChild(celda_telefono);
        fila.appendChild(celda_accion);
        tbd.appendChild(fila);
        table.appendChild(tbd);
        limpiar();
        i+=1;
    } else {
        filita.cells[0].innerHTML = nom.value;
        filita.cells[1].innerHTML = cor.value;
        filita.cells[2].innerHTML = telf.value;
        filita = "";
        limpiar();
        estado = 0;
    }

}
function limpiar() {
    nom.value = "";
    cor.value = "";
    telf.value = "";
    nom.focus();
}
function editar(row) {
    filita = row.parentNode.parentNode;
    nom.value = filita.cells[0].innerHTML;
    cor.value = filita.cells[1].innerHTML;
    telf.value = filita.cells[2].innerHTML;
    estado = 1;
}
function eliminar(row) {
    var fil = row.parentNode.parentNode;
    fil.parentNode.removeChild(fil);
}
