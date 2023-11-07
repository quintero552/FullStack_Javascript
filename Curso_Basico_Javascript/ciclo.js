//Este Ejersicio conlleva, llamar a los estudiante que estan dentro de un Array [].

//Creamos la variable, la cual lleva 4 alumnos
var estudiante = ["Angel", "Cairis", "Mia", "Angel Mateo"];

//Creamos una funcion que llamara a cada estuddiante
function llamarEstudiante(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

//Ademas creamos un LOOP el cual podemos realizar matematicamente la longitud de cada array ejemplo.,
for (var i=0; i < estudiante.length; i++) {// creamos la variable en 0 y luego decimos que si la la variable estudiante "i" es menor (<) a la logintud (estudiante.length) de la variable estudainte, se suma i++ y se imprimer : llamarEstudiante(estudiante[i])
    llamarEstudiante(estudiante[i]);
}


/// Ciclo WHILE

var estudiantes = ["Angel", "Cairis", "Mia", "Angel Mateo"];

function llamarEstudiante(estudiantes) {
    console.log(`Hola, ${estudiantes}`);
}

while (estudiantes.length > 0) {
    var estudiante = estudiantes.shift(); // shift se agrega para eliminar 
    llamarEstudiante(estudiante);
}

//si queremos ver loque esta pasando utilizamos n console.log(estudiante;)
var estudiantes = ["Angel", "Cairis", "Mia", "Angel Mateo"];

function llamarEstudiante(estudiantes) {
    console.log(`Hola, ${estudiantes}`);
}

while (estudiantes.length > 0) {
    console.log(estudiantes);// se agrega el console log para evr que esta hacxiendo la funcion
    var estudiante = estudiantes.shift(); // shift se agrega para eliminar 
    llamarEstudiante(estudiante);
}