var miAuto ={
    marca: "Changan",
    modelo: "cs-15",
    annio: 2022
};

//si quiero traerme el valor de ese dicionario especifo:

miAuto.modelo
//out: 'cs-15'

//ademas si quierp agregar o llamar una funcion que esta dentro de un objeto seria:
// QUE ES .THIS

var miAuto ={
    marca: "Changan",
    modelo: "cs-15",
    annio: 2022,
    detallesDelAuto: function () {
        console.log(`Auto ${this.modelo} Año ${this.annio} `)
    }
};

miAuto.detallesDelAuto();

//OTRO EJEMPLO;

var datos = {
    Nombre: "Patricia Leon Gatica",
    Recepcion_Equipo: "Sin equipo",
    annio: 2023,
    Gerecia: "GAF",
    detalleUsuario: function () {
        console.log(`La usuaria ${this.Nombre} de la ${this.Gerecia} finalizo en el año ${this.annio} `);
    }
    
};

datos.detalleUsuario();

//recordat qie *this* hace referencia al objeto global en este caso "datos" 



////////////////////////////////////// CONTRSUCTORA DE OBNJETO

/*hacer una funcion contsructora y hacer un loop para dar una lista de 30 vehiculos*/

function auto(modelo, marca, annio) {
    this.modelo = modelo;
    this.marca = marca;
    this.annio = annio;
}

for (i = 0; i < 2; i++) {
    var carro = new auto("Civic", "Honda", 2019);
    auto(modelo, marca, annio);
}


/*hacer una funcion contsructora y hacer un loop para dar una lista de 30 vehiculos*/

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
