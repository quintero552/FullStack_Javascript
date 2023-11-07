var jugador = prompt("ingresa tu respuesta");
var pc = "papel";

function juego() {
    
    if(jugador == "piedra" && pc == "tijera"){
        console.log("Has ganado ", jugador);
    }else if(jugador == "tijera" && pc == "piedra"){
        console.log("Has perdido ", jugador);
    }else if (jugador == "papel" && pc == "tijera"){
        console.log("Has perdido ", jugador);
    }else if (jugador == "tijera" && pc == "papel"){
        console.log("Has ganado ", jugador);
    }else if (jugador == "piedra" && pc == "piedra"){
        console.log("Empate por piedra");
    }else if (jugador == "papel" && pc == "papel"){
        console.log("Empate por papel");
    }else if (jugador == "tijera" && pc == "tijera"){
        console.log("Empate por tijera");
    }else if (jugador == "piedra" && pc == "papel"){
        console.log("has perdido ", jugador);
    }else{
        console.log("Ingresa un valor");
    }
}

juego();


// con swchit

var jugador = prompt("Ingresa tu juego");
var pc = "tijera";

function juego() {
    switch(jugador){
        
        case "piedra":
             jugador == "piedra" && pc == "tijera" || jugador == "tijera" && pc == "papel"
             console.log("Hasss Ganado ", jugador);
             break;
            
        case "papel":
             jugador == "papel" && pc == "tijera" || jugador == "tijera" && pc == "piedra"        
             console.log("PERDISTES ", jugador);
             break;
    
        case "tijera":
             jugador == "tijera" && pc == "tijera" || jugador == "piedra" && pc == "piedra" || jugador == "papel" && pc == "papel"
             console.log("EMPATE ");
             break;    
        default:
            console.log("no has ingresado nada");
    }
}

juego();