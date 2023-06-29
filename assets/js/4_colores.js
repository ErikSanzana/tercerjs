let d1 = document.getElementById('d1');
let d2 = document.getElementById('d2');
let d3 = document.getElementById('d3');
let d4 = document.getElementById('d4');
const h2Key=document.getElementById("key");

d1.addEventListener('click', function() {
  d1.style.backgroundColor = 'black';
});

d2.addEventListener('click', function() {
  d2.style.backgroundColor = 'black';
});

d3.addEventListener('click', function() {
  d3.style.backgroundColor = 'black';
});

d4.addEventListener('click', function() {
  d4.style.backgroundColor = 'black';
});
key.addEventListener('click', function() {
  key.style.backgroundColor = 'black';
});
/* --------------------------------------------------------------------------------- */

document.addEventListener('keydown', function (event) {
if (event.key === "a") {
  h2Key.style.backgroundColor="purple";
/* Cambiar a color 1 */
} else if (event.key === "s") {
  h2Key.style.backgroundColor="gray"
/* Cambiar a color 2 */
}else if (event.key === "d") {
  h2Key.style.backgroundColor="pink"
/* Cambiar a color 3 */


} else if (event.key === "q") {
  var div = document.createElement("div");
  div.style.backgroundColor = "skyblue";
  div.style.width = "200px";
  div.style.height = "200px";
  
  var container = document.getElementById("container");
  container.appendChild(div);
}else if (event.key === "w") {
  var div = document.createElement("div");
  div.style.backgroundColor = "orange";
  div.style.width = "200px";
  div.style.height = "200px";
  
  var container = document.getElementById("container");
  container.appendChild(div);
}else if (event.key === "e") {
  var div = document.createElement("div");
  div.style.backgroundColor = "#6F4E37";
  div.style.width = "200px";
  div.style.height = "200px";
  
  var container = document.getElementById("container");
  container.appendChild(div);
}


})

