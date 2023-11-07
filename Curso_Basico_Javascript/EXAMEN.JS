

  // Y ESTE FUE EL QUE INTENTO MEJORAR

  function miAuto(marca,modelo,annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
};


var datos = [];

for (var i = 0; i < 2; i++) {
    var marca = prompt("Introduce la MArca del Auto");
    var modelo = prompt("Introduce el Modelo del Auto");
    var annio = prompt("Introduce el Año del Vehiculo");
    datos.push(new miAuto (marca, modelo, annio)); // se llama (new) ya que se creara una nueva array por cada auto registrado, ademas se llama a la funcion llamada: miAuto(marca,modelo,annio) la cual automaticamente generara los datos del nuevo auto
}

for (var i = 0; i < datos.length; i++) {
    console.log(datos[i]);
}