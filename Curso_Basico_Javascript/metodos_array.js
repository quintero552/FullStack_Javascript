// hacer una funcion con el metodo de array .filter() que me traiga todos los usuarios que estan dentro de un array de objeto que sean mayor de edad de 40

var clientes = [

    {nombre: "Angel", edad: 33, correo:"quintero552@hotmail.com"},
    {nombre: "Juan", edad: 40, correo:"juan1987@gmail.com"},
    {nombre: "Luisa", edad: 26, correo:"luisacarlos@yahoo.es"},
    {nombre: "Francisco", edad: 48, correo:"francisco@gmail.com"},
    {nombre: "Jean", edad: 38, correo:"jean@hotmail.com"},
    {nombre: "marco", edad: 15, correo:"jean@hotmail.com"},
    {nombre: "jose", edad: 10, correo:"jean@hotmail.com"},
    {nombre: "maria", edad: 18, correo:"jean@hotmail.com"}
];

var usuarios = clientes.filter(function(clientes) {
    return clientes.edad > 40;
})

//Out:
//console.log(usuarios);

//METODO DE .MAP() SEGUNDA OPCION QUE ME MAPEA EL ARTICULO

var clientes = [

    {nombre: "Angel", edad: 33, correo:"quintero552@hotmail.com"},
    {nombre: "Juan", edad: 40, correo:"juan1987@gmail.com"},
    {nombre: "Luisa", edad: 26, correo:"luisacarlos@yahoo.es"},
    {nombre: "Francisco", edad: 48, correo:"francisco@gmail.com"},
    {nombre: "Jean", edad: 38, correo:"jean@hotmail.com"},
    {nombre: "marco", edad: 15, correo:"jean@hotmail.com"},
    {nombre: "jose", edad: 10, correo:"jean@hotmail.com"},
    {nombre: "maria", edad: 18, correo:"jean@hotmail.com"}
];



var nombreCorreo = clientes.map(function(articulo) {
    return articulo.nombre;
})

//console.log(nombreCorreo)

//////////////////////////////////////////////////////////////////////// finde();*////

// Este Metodo, nos busca una palabra especifica dentro del array ejemplo:
// si quiero encontrar un nombre especifico dentro del objeto:

var clientes = [

    {nombre: "Angel", edad: 33, correo:"quintero552@hotmail.com"},
    {nombre: "Juan", edad: 40, correo:"juan1987@gmail.com"},
    {nombre: "Luisa", edad: 26, correo:"luisacarlos@yahoo.es"},
    {nombre: "Francisco", edad: 48, correo:"francisco@gmail.com"},
    {nombre: "Jean", edad: 38, correo:"jean@hotmail.com"},
    {nombre: "marco", edad: 15, correo:"jean@hotmail.com"},
    {nombre: "jose", edad: 10, correo:"jean@hotmail.com"},
    {nombre: "maria", edad: 18, correo:"jean@hotmail.com"}
];

var nombres = clientes.find(function(nombres){
    return nombres.nombre == 'Marco';
});


console.log(nombres);


// segunda opcion de FINDE();

var clientes = [

    {nombre: "Angel", edad: 33, correo:"quintero552@hotmail.com"},
    {nombre: "Juan", edad: 40, correo:"juan1987@gmail.com"},
    {nombre: "Luisa", edad: 26, correo:"luisacarlos@yahoo.es"},
    {nombre: "Francisco", edad: 48, correo:"francisco@gmail.com"},
    {nombre: "Jean", edad: 38, correo:"jean@hotmail.com"},
    {nombre: "marco", edad: 15, correo:"jean@hotmail.com"},
    {nombre: "jose", edad: 10, correo:"jean@hotmail.com"},
    {nombre: "maria", edad: 18, correo:"jean@hotmail.com"}
];


var nombrefind = clientes.find(function(nombre) {
    return nombre.edad < 18;
})

//out
// nombrefind
// el resltado es: {nombre: 'marco', edad: 15, correo: 'jean@hotmail.com'}







//////////////////////////////////////////////////////////////////////// forEach();*////

// forEach, este metodo no me genera un nuevo array como los otros, sino que me hace un recorrido y me busca lo que especifico.

var clientes = [

    {nombre: "Angel", edad: 33, correo:"quintero552@hotmail.com"},
    {nombre: "Juan", edad: 40, correo:"juan1987@gmail.com"},
    {nombre: "Luisa", edad: 26, correo:"luisacarlos@yahoo.es"},
    {nombre: "Francisco", edad: 48, correo:"francisco@gmail.com"},
    {nombre: "Jean", edad: 38, correo:"jean@hotmail.com"},
    {nombre: "marco", edad: 15, correo:"jean@hotmail.com"},
    {nombre: "jose", edad: 10, correo:"jean@hotmail.com"},
    {nombre: "maria", edad: 18, correo:"jean@hotmail.com"}
];

//enter
// traemos los datos dle email
clientes.forEach(function(email) {
    console.log(email.correo);
})

/*

         quintero552@hotmail.com
         juan1987@gmail.com
        luisacarlos@yahoo.es
         francisco@gmail.com
        jean@hotmail.com

*/

//////////////////////////////////////////////////////////////////////// .some();*////

// .some(); verdadero y falso depende la validacion

var clientes = [

    {nombre: "Angel", edad: 33, correo:"quintero552@hotmail.com"},
    {nombre: "Juan", edad: 40, correo:"juan1987@gmail.com"},
    {nombre: "Luisa", edad: 26, correo:"luisacarlos@yahoo.es"},
    {nombre: "Francisco", edad: 48, correo:"francisco@gmail.com"},
    {nombre: "Jean", edad: 38, correo:"jean@hotmail.com"},
    {nombre: "marco", edad: 15, correo:"jean@hotmail.com"},
    {nombre: "jose", edad: 10, correo:"jean@hotmail.com"},
    {nombre: "maria", edad: 18, correo:"jean@hotmail.com"}
];

// enter
// verificamos si hay alguien que tenga mas de 30 años

var usuariosMayores = clientes.some(function(usuarios) {
    return usuarios.edad > 40;
});

//out

console.log(usuariosMayores);

// resltado: TRUE
