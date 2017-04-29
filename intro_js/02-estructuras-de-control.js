// Estructuras de control


// if: evaluar una condicion

// tenemos un concierto

edadAsistente = 17

if (edadAsistente < 18) {
  // codigo en caso de ser cierto
  console.log('no puede ingresar')
} else {
  console.log('sí puede ingresar')
}


edadAsistente = 34
tieneBoleto = false
estaEnLaLista = true


// if( edadAsistente >= 18 && tieneBoleto === true ) {
// if( edadAsistente >= 18 && tieneBoleto ) {
if( edadAsistente >= 18 && ( tieneBoleto || estaEnLaLista ) ) {
  console.log('sí puede pasar')

  if( estaEnLaLista ) {
    console.log('trago gratis')
  }

} else {
  console.log('no puede pasar')
}




// switch
// comparar un dato con algunos casos, y ejecutar aquellos que se cumplan

edad = 15


/*

if (edad == 0) {
   // hacer algo
} else if (edad == 1) {
   // hacer algo
} else {
   if( edad === 8 ) {

   }
}

*/

switch (edad) {

  case 0:
    console.log('nace')
    break
  case 1:
    console.log('primer cumpleaños')
    break
  case 5:
    console.log('entras a la escuela')
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    console.log('esta en la primaria')
    break
  case 11:
    console.log('entra a secundaria')
  case 12:
  case 13:
    console.log('esta en la secundaria')
    break
  case 14:
    console.log('entra a preparatoria')
  case 15:
  case 16:
    console.log('esta en la preparatoria')
    break
  case 17:
    console.log('termina la escuela')
    break

  case 18:
    console.log('se vuelve mayor de edad')
    break

  case 27:
    console.log('muere de sobredosis')
    break
  case 33:
    console.log('edad de cristo')
    break

  default:
    console.log('cumple un año más')
    break

}




// Loops / Bucles:

// while
// realizar una secuencia de instrucciones mientras se cumpla una condicion


var i = 0

while( i < 10 ) {

  console.log( 'el valor de i es', i );
  i++

}



// concierto

numeroDeAsistentes = 0
cupoMaximo = 100

while( numeroDeAsistentes < cupoMaximo ) {

   // generar una edad aleatoria entre 0 y 80
  edadAsistente = Math.floor(Math.random() * 80)
  // generar un valor aleatorio, 0 o 1. puede ser usado como booleano
  tieneBoleto = Math.round( Math.random() )

  console.log( 'edad', edadAsistente, 'boleto', tieneBoleto )

  if( edadAsistente >= 18 && tieneBoleto ) {
    numeroDeAsistentes++
    console.log('puede ingresar. restan', cupoMaximo - numeroDeAsistentes, 'lugares')
  } else {
    console.log('no puede ingresar')
  }

}



// for

// 3 enunciados:
// situacion inicial
// condicion final
// incremento

for( var i = 0; i < 10; i++ ) {
  console.log('contador', i);
}


// Ejercicio:
// Realizar un contador, que aumente de 5 en 5, de 0 hasta llegar a 100

for( var i = 0; i < 100; i += 5 ) {
  console.log('contador', i);
}

for( var i = 0; i < 20; i++ ) {
  console.log('contador', i * 5);
}

for( var i = 0; i < 100; i++ ) {
  if( i % 5 === 0 ) {
    console.log('contador', i);
  }
}
//
