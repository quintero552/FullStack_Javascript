function miAuto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
};

var miAuto = new ["Changan", "Cs-15", "2022"];
var miAut1 = ["Toyota", "corolla", "2020"];
var miAut2 = ["Chevrolet", "sail", "2019"];
var miAut3 = ["Tesla", "Model X", "2024"];
var miAut4 = ["Tesla", "Model X-Plus", "2023"];

//Out
//miAut3

//Si quieroi saber el año o modelo de un vehiculo especifico. seria:

miAut3[2]// el cual llama el año del array osea: var miAut3 = [0, 1, 2];

// agregar usuarios de forma masiva
//LOOP PARA AGREGAR DATOS A LA FNCION CONSTRCTRA
//Crear una funcion contsructora que me genere un loop y se agregue automaticamente 30 vehiculos.


var vehiculo = parseInt
///////////////////////////

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