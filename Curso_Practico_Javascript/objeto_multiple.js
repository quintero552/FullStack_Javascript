//SI tengo una condicional que presenta muchos codigos podemos hacer una funcion y llamarlos. Ejemñlo

// Creamos un Objeto para que almacene todas las variables de mi planes.
const planesPlatzy ={
    free: 'Puedes tomar este plan Gratis',
    duo: 'Puedes tomar este plan Duo por Platzy',
    expert: 'Puedes tomar este plan Experto y te hace rapido',
    experduo: 'Puedes tomar este Super Plan ExperDuo para que sea volaz'
};

//luego creamos una funcion para que sea 1 sola funcion y me llame el valor del objeto a llamr

function tipoDeSuscripcion(suscripcion) {
    if (planesPlatzy[suscripcion]) { //aca llamamos la CONSTANTE y me agregue dentro de un array el plan
        console.log(planesPlatzy[suscripcion])
        return;
    }

    console.log('No has agregado ningun plan...')
}


