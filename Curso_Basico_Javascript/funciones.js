// funciones declarativas 
/*
function miFuncion(){
    return 3;
}

miFuncion();
//Funciones Expresion

var myFunciones = function(){
    return a + b;
}

myFunciones();
*/
function sumar(a,b){
    var resultados = a + b;
    return resultados;
}

sumar(5,5);

// Funciones Declarativas
function miFuncion() {
    return 3;
}
miFuncion(2,4);// 2+4 = 6

// Funciones Expresion
var miFuncion = function(a,b){
    return a + b;
}

// si quiero llamar a la funcion: 
miFuncion(2,4);// 2+4 = 6


//PLAY GROUP: RETORNAR EL TIPO

/*
En este desafío encontrarás una función llamada solution que recibe un parámetro llamado valor. Debes encontrar el tipo de dato del parámetro valor y retornarlo desde la función solution.

Recuerda que el parámetro valor será distinto por cada distinta forma en que ejecutemos la función solution.

Por ejemplo:

Dados los siguientes llamados a la función solution:

solution(1)
solution("Dieguillo")
solution(true)

Debes obtener los siguientes resultados:

"number"
"string"
"boolean"

*/

export function solution(valor) {
    // Escribe tu código aquí 👈
    return typeof (valor);
  }
  
  solution(1)
  solution("Dieguillo")
  solution(true)