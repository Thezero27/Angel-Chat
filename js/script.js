//Jodiendo a yepeta

var clickYepeta = document.getElementById("yepeta-click") 

clickYepeta.onclick = function (){
    $("#yepeta-img").html("<img class='imgw' src='img/anonymous16.jpg'>")
    $("#yepeta-name").html("<span style='display: block;' class='card-text'>Angel</span>")
    $("#yepeta-aviso").html("<span class='card-text'>+51 925529690</span>")
    $("descarga").html("<span id='descarga' href='https://wa.link/x9yb7f'>Descargar</span>")

}