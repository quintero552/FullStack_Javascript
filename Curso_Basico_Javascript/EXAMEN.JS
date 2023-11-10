

  // Y ESTE FUE EL QUE INTENTO MEJORAR

// Se crea la funcion constructura
function auto(modelo, marca, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var datos = [];// se crea una variable donde se guardaroan los datos

// Se realiza un loop donde se realizara que indicara cuantos carros se guardaran " i < 1" y se agrega los prompt
for (i = 0; i < 1; i++) {    
    var marca = prompt("ingresa marca");
    var modelo = prompt("ingresa modelo");
    var annio = prompt("ingresa aniio");
    //var dato = [marca,modelo,annio]; 
    //console.log(`Este es el `, dato)
    datos.push(new auto(modelo, marca, annio));// ademas se agregan en el array con cada push (quese asigne nuevo (new con el parametr de la funcion)
}



// ademas se crea otro loop donde indicara que cuando llegue la longitud del array datos.length imprima los datos.
for (i = 0; i < datos.length; i++) {
    console.log(datos[i]);
    
}

// Objeto car

var car ={
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

function solution(car) {
    
}

// licensePlate debe estar esta propiedad(la placa del auto) retur car con la propiedad drivingLicense como true.  else return drivingLicense como false
/*
Carro 1: {
    "color": "red",
    "brand": "Kia"
   }
   
   Carro 2: {
    "color": "gray",
    "brand": "Chevrolet",
    "licensePlate": "AAA111"
   }
   
   Carro 3: {
    "licensePlate": "RGB255"
   }

*/


/// EL QUE FUNCIONOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO ESTUDIAR MAS

export function solution(car) {
    // Tu código aquí 👈
    car.drivingLicense = Boolean(car.licensePlate); // SE AGREGA LA VARIABLE CAR SEGUID DE
  
    return car;
  }
  