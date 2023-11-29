//Crear una funcion que pueda recivir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

// Creamos primero el Objeto:

let usuarios = {
    nombre: 'Angel', 
    apellido: 'quintero', 
    edad: 33
};

console.log(Object.values(usuarios)); // convertimos el objeto en un array con Object.values

//luego creamos una funcion:

function extraerDatos(usuarios) {
    let Arr = Object.values(usuarios);// llamamos el objeto convertido en array y le asignamos una variable
    for (i= 0; i < Arr.length; i++) {
        console.log(Arr[i]);
    }
}

//y por ultimo llamamos a la funcion:
extraerDatos(usuarios);
