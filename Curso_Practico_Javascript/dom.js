const h1 = document.querySelector('h1');
const formulario = document.querySelector('#form');
const inputOne = document.querySelector('#inputOne');//se agrega gato # porque es ID
const inputTwo = document.querySelector('#inputTwo');//se agrega gato # porque es ID
const calcular = document.querySelector('#btnCalcular');//se agrega gato # porque es ID
const pResultado = document.querySelector('#camp');

h1.innerHTML = 'Se cambia el <br> DOM por Javascipt';// el titulo.

/*
//con este codigo se anexa la funcion de agregaInput() al calcular = document.querySelector('#btnCalcular');
calcular.addEventListener('click', agregaInput);

//Creamos la funcion que llamara el btn de Onclik
function agregaInput() {
    //Capturamos lo escrito en los inputs y se guardan en las variables
    let numUno = Number(inputOne.value);// Creamos una variable el cual convierte en nmero los inputOne puede ser: parseInt
    let numDos = Number(inputTwo.value);// Creamos una variable el cual convierte en nmero los inputOne parseInt
    let resultado = numUno + numDos;
    console.log(numUno + numDos);// sumamos los 2 varivales.
    pResultado.innerText = 'El resultado de esa suma ' + resultado;// aca imprimimos el resultado en el html
}*/


// Otra forma de llamar el formulario seria:
//con este codigo se anexa const formulario = document.querySelector('#form');
formulario.addEventListener('submit', agregaInput);

//Creamos la funcion que llamara el btn de Onclik
function agregaInput(event) {
    event.preventDefault();
    //Capturamos lo escrito en los inputs y se guardan en las variables
    let numUno = Number(inputOne.value);// Creamos una variable el cual convierte en nmero los inputOne puede ser: parseInt
    let numDos = Number(inputTwo.value);// Creamos una variable el cual convierte en nmero los inputOne parseInt
    let resultado = numUno + numDos;
    console.log(numUno + numDos);// sumamos los 2 varivales.
    pResultado.innerText = 'El resultado de esa suma ' + resultado;// aca imprimimos el resultado en el html
}













/*
h1.innerHTML = 'Se cambia el <br> DOM por Javascipt';
h1.innerText = 'Se cambia el <br> DOM por Javascipt'; // COn este innerText se agrega el <br> y se escribe.
console.log(h1.getAttribute('class')); // con esta linea se agrega un atributo y se cambia la clase que esta en <h1 class="">
h1.setAttribute('class', 'rojo'), // se indica que al atributpo class= se agrega ahora el color rojo-
h1.classList.add('rojo')// se agrega una clase rojo
h1.classList.remove('verde');// se lelimina el color verde

//esta lineas de codigo agrega una imagen y la anexa al html
/*
const img = document.createElement('img'); //creamos una variable img
img.setAttribute('src', 'https://cdn.pixabay.com/photo/2023/10/22/20/11/flowers-8334774_1280.jpg')//se agrega la imagen con un atributo
console.log(img)// aca solo para ver en consola si se ve la imagen

imagen.append(img)// se llama el id="imagen" que esta en la etiqueta del <p> que esta dentro del html

console.log({
    h1,
    p,
    input,
});*/