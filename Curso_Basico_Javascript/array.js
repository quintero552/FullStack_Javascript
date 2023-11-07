var frutas = ["Manzana", "Platano", "Mango"];
console.log(frutas);

//Si quiero quitar una fruta del Arrais [] se utiliza pop y elimina el ultimo elemento
var sacarFruta = frutas.pop();

//Si quiero agregar una fruta del Arrais [] se utiliza push y agrega en el ultimo elemnto
var agregar = frutas.push("Naranja")

//Si quiero agregar una fruta del Arrais [] EN EL PRIMER ARRAI osea la primera posicion .unshift
var agregarPrimerPosicion = frutas.unshift("Fresa");

//Si quiero ELIMINAR una fruta del Arrais [] EN EL PRIMER ARRAI osea la primera posicion .shift
var borrarfrutas = frutas.shift("Fresa");

//Si quiero ver la posicion del Elemnto del, ARRAIS
var posicion = frutas.indexOf("platano");
posicion;

//ademas si quiero traerme un elemento directo la funcion es:
frutas[1];