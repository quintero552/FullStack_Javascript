// la condicion re<al e if es:
/*
if (/* recordar que todo lo que ingrese aca debe ser true condition) {
    
}*/

if (true) {
    console.log("Soy verdadero");
}else{
    console.log("No soy verdadero");
}

// crear un flujo, donde el usuario puede votar si es mayor a 18 años, sino es menor de edad y si tiene mayor a 18 años ya has votado

//creamor la variable

var edad = 18;//creamor la variable

if (edad === 18) { //si o si debe tenr 18 años
    console.log("Ya puedes Votar por, felicidades")
}else if (edad > 18) {//si es mayor a 18 años
    console.log("Ya has ejercido tu derecho al voto anteriormente")
}else{
    console.log("Debes cumplir tus 18 años de edad, para ejercer el derecho al voto")
}

// cabe mencionar que podemos utilizar tantas else if cuantas queramos...

//operario ternario

condicion ? true : false;

Ejemplo:
var numero = 1;
var resultado = numero === 1 ? "Soy un uno" : "No Soy UNO";
console.log(resultado);
/*resultado da Soy un un*/

// Ejercisio de pieda papel y tjera:

//Primero se declaran las variables
var jugador = "tijera"; 
var computador = "piedra";

// luego se crea la condicion
if (jugador == "piedra" && computador === "papel" ) {
    console.log("ganastes");
}else if (jugador == "papel" && computador == "tijera"){
    console.log("gano computador");
}else if (jugador == "tijera" && computador == "piedra"){
    console.log("de neuvo gano computador");
}else if (jugador == "tijera" && computador == "papel"){
    console.log("de neuvo gano computador 2");
}else{
    console.log("NADIE HA GANADO");
}


//////////////////////
var jugador; 
var computador;


function resultados() {
    var judadorsito = "papel";
    var pc = "tijera";
    if (judadorsito == "piedra" && pc == "tijera") {
        console.log("gano jugadorsito");
    }else if(judadorsito == "papel" && pc =="tijera"){
        console.log("Gano PC!");
    }else{
        console.log("NO HAY GANADOR");
    }
}

/////////////// otro metodo
/*
var p1="piedra";
var p2="papel";
var p3="tijera";

function quienGana(juego){
    if (juego===p1){
console.log(`Ganaste con ${p1}`);
    } elseif(juego===p2){
        console.log(`Perdiste con ${p2}`);
    }elseif (juego===p3){
        console.log(`Perdiste con ${p3}`);
    }else{
        console.log("Ingresa piedra , papel o tijera, palabras para jugar");
    }
}

quienGana("dedal");*/