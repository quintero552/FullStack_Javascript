// las funciones nos permiten almacenar datos bloques de codigo y ejecutarlo en otros codigos.

function sumar(numero1, numero2) {// y lo que esta dentro del parentesis (numero1, numero2)
    return numero1 + numero2;
}

sumar(5,2);// lo que esta dentro del parentecis es el argumento

// las funciones reciben parametros cando las creamos, y reciben argumenos cuando la ejecutamos. ++

/* En este ejemplo, debemos convertir un condigo en una funcion. */

//1 Ejercisio

const name = 'Angel';
const lastName = 'Quinero';
const name_lastName = name + lastName;
const apod = 'Desarrollador de Software';

console.log('Hola me llamo ' + name_lastName + 'y soy ' + apod);

//Convertir en una funcion.

function saludar(name, ) {
    
}
//

/**
 * Escribe una función nextInLine que tome un arreglo (arr) y un número (item) como argumentos.

Agrega el número al final del arreglo, luego elimina el primer elemento del arreglo.

La función nextInLine debe entonces devolver el elemento que fue removido.
 * 
 Aprobado:nextInLine([], 5) debe devolver un número.
Aprobado:nextInLine([], 1) debe devolver 1
Aprobado:nextInLine([2], 1) debe devolver 2
Aprobado:nextInLine([5,6,7,8,9], 1) debe devolver 5
Aprobado:Después de nextInLine(testArr, 10), testArr[4] debe ser igual a 10
 */
function nextInLine(arr, item) {
    // Cambia solo el código debajo de esta línea
    arr.push(item); //agregamos el numero dentro de la lista
    return arr.shift();// retornamos el array con el primer elemento del array
    // Cambia solo el código encima de esta línea
  }
  
  // Configuración
  let testArr = [1, 2, 3, 4, 5];
  
  // Muestra el código
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

  /**
   * salida: 
Before: [1,2,3,4,5]
1
After: [2,3,4,5,6]
   */

function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }else if (val < 5){
      return "Smaller than 5";
    }else{
      return "Between 5 and 10";
    }
  }
  
  testElseIf(7); 