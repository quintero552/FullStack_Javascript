// Existen 2 Scope, la Global y la local
// Scope Global

var myNombre = "Angel";

//Scope Local
function nCompleto(apellido) {
    var nApellido = "Quintero";
    //console.log("Mi nombre completo es: "+myNombre+" "+nApellido);
    console.log("Soy", myNombre + " " + nApellido);
}

nCompleto();

//Recordar que Scope Local, puede acceder a Scope Global, pero Scope Global no puede Ingresar a Scope Local

var miNombre = "ANgel";

function nombre() {
    var apellido = "Quintero";
    return miNombre + " " + apellido;
}

nombre();