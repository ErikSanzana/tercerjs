/* function pintar(){
ele = document.getElementById("ele1")
ele.style.backgroundColor = 'yellow'
}
ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);


 */
/* ES EL DE FABRICA */


/* function pintar(elemento) {
  elemento.style.backgroundColor = 'yellow';
}

let ele = document.getElementById("ele1");
ele.addEventListener("click", function() {
  pintar(ele);
}); */

/* MODIFICIADO */



function pintar(elemento) {
  elemento.style.backgroundColor = 'yellow';
}

let ele = document.getElementById("ele1");
ele.style.backgroundColor = 'green';
/* lo pasamos mientras a la funcion mientras no hay clik */

ele.addEventListener("click", function() {
  pintar(ele);
});
/* modificado del modificado */


