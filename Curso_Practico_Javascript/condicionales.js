function datosContacto(contacto) {
    if (contacto = "Angel") {
        console.log("Este es " + contacto)
    }

    if (contacto = "Cairis") {
        console.log("Este es " + contacto)
    }

    if (contacto = "Mia") {
        console.log("Este es " + contacto)
    }

    if (contacto = "AngAngel Mateo") {
        console.log("Este es " + contacto)
    }
}

datosContacto("Angel")

// Funciones con switch

function caseInSwitch(val) {
    let answer = "";
    // Cambia solo el código debajo de esta línea
  
      switch (val) {
        case 1:
          return "alpha";
        case 2:
          return "beta";
          break;
        case 3:
          return "gamma";
          break;
        case 4:
          return "delta"
        defaul:
          break;
      }
    // Cambia solo el código encima de esta línea
    return answer;
  }
  
  caseInSwitch(1);
/*
  En una declaración switch puede que no seas capaz de especificar todos los valores posibles como declaraciones de case (caso). En su lugar, se puede añadir la declaración default, la cual se ejecutará si no se encuentran declaraciones case. Piensa en ella como la última sentencia else en una cadena if/else.

Una declaración default debe ser el último caso.*/

/*

Escribe una declaración switch para establecer answer con las siguientes condiciones:
a - apple
b - bird
c - cat
default - stuff
*/

function switchOfStuff(val) {
    let answer = "";
    // Cambia solo el código debajo de esta línea
  
      switch (val) {
          case "a":
            return "apple";
          case "b":
            return "bird";
            break;
          case "c":
            return "cat";
            break;
          case "d":
            return "stuff";
            break;
          case 4:
            return "stuff";
            break;
          default:
             answer = "stuff";
        }
  
    // Cambia solo el código encima de esta línea
    return answer;
  }
  
  switchOfStuff("a");
  

  /*
  
  cribe una declaración switch para establecer answer con los siguientes rangos:
1-3 - Low
4-6 - Mid
7-9 - High

Nota: Necesitarás tener un case para cada número dentro del rango.


function sequentialSizes(val) {
  let answer = "";
  // Cambia solo el código debajo de esta línea

    switch (val) {
          case 1:
          case 2:
          case 3:
            return "Low";
            break;
          case 4:
          case 5:
          case 6:
            return "Mid";
            break;
          case 7:
          case 8:
          case 9:
            return "High";
            break;
          default:
             answer = "stuff";
        }


  // Cambia solo el código encima de esta línea
  return answer;
}

sequentialSizes(1);
  
  
  
  */

/*
isLess(10, 15) debe devolver true
Aprobado:isLess(15, 10) debe devolver false
Aprobado:No debes utilizar las sentencias if o else


*/

function isLess(a, b) {
    // Cambia solo el código debajo de esta línea
    return a <= b;// si 10 es menor(<) o igual(=) a 15, devuelve TRUE sino devuelve false
    // Cambia solo el código encima de esta línea
  }
  
  isLess(10, 15);