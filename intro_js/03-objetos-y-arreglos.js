// Objetos y Arreglos


// Objeto
// conjunto de propiedad asociadas a valores

objeto = {
  propiedad1: 'valor1',
  propiedad2: 'valor2',
  propiedad3: 'valor3',
}

console.log(objeto.propiedad2)



persona = {
  nombres: 'Ernesto',
  apellidoPaterno: 'Torres',
  apellidoMaterno: 'Corona',
  edad: 30,
  ocupacion: 'Vendedor'
}


/*
Ejercicio: mostrar el contenido del objeto anterior
en el siguiente formato:
*/

'Torres Corona, Ernesto. 30 años. Vendedor.'

console.log(
  persona.apellidoPaterno + ' ' + persona.apellidoMaterno + ', '
  + persona.nombres + '. ' + persona.edad + ' años. '
  + persona.ocupacion
)


objeto = {
  a: 123,
  propiedadInutil: '...'
}

objeto.a = 987

objeto.b = 456

console.log( objeto )
// sintaxis alternativa para recuperar una propiedad:
console.log( objeto['b'] )

// eliminar una propiedad de un objeto

delete objeto.propiedadInutil

console.log( objeto )




// Métodos de Objetos:

// un mètodo es una funcion que es parte del objeto, y que puede ser invocado en cualquier momento

persona = {
  nombres: 'Ernesto',
  apellidoPaterno: 'Torres',
  apellidoMaterno: 'Corona',
  edad: 30,
  ocupacion: 'Vendedor',
  // método para obtener el nombre completo
  nombreCompleto: function() {
    return this.nombres + ' ' + this.apellidoPaterno + ' ' + this.apellidoMaterno
  }
}

console.log( persona.nombreCompleto() )



// Arreglos

// Secuencias de Datos ordenadas de manera lineal

arreglo = [ 17, 41, 122, 33 ]

// recuperar un elemento utilizando su índice
arreglo[ 0 ]
arreglo[ 1 ]
arreglo[ 2 ]
arreglo[ 3 ]

// sustituir el valor en una posicion dada:
arreglo[ 2 ] = 555

// introducir más cosas en el arreglo, en la posicion que queramos
arreglo[ 4 ] = 555
arreglo[ 7 ] = 155



frutas = [
  'manzana',
  'pera',
  'naranja',
  'fresa',
  'guayaba'
]

// averiguar cuantas frutas hay

frutas.length

// iterar por un arreglo:

for( var i = 0; i < frutas.length; i++ ) {
  console.log( "la fruta numero", i, "es", frutas[ i ] )
}

// sintaxis alternativa
for( i in frutas ) {
  console.log( "la fruta numero", i, "es", frutas[ i ] )
}


// insertar elementos al principio del arreglo

frutas.unshift( 'zapote' )

// introducir elementos al final del arreglo con .push

frutas.push( 'carambola' )
frutas.push( 'papaya' )

// sacar el ultimo elemento, recuperarlo, y quitarlo del arreglo

ultimafruta = frutas.pop()


// quitar un elemento en una posicion determinada

// metodo splice lleva
// 1) el indice que queremos quitar y
// 2) el numero de elementos que queremos quitar

// nos devuelve los elementos extraidos en un arreglo

frutas.splice( 3, 1 )




// obtener la posicion de un elemento, conociendo su valor
// si no existe en el arreglo, obtendremos el valor '-1'

frutas.indexOf( 'manzana' )



indice = frutas.indexOf('naranja')
if( indice >= 0 )
  frutas.splice( indice, 1 )
