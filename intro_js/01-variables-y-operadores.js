// Comentario: linea que no se interpreta

/*
Comentarios
multi
línea
*/


unaVariable = 'algo'

alert( unaVariable )

// las variables se pueden declarar utilizando la palabra 'var',
// esto sirve para controlar el àmbito en el que viven las variables

var variableDeclarada = 'algo'


/*
 palabras reservadas
 p. ej. var, if, else, while, new, delete, use, etc.
 */


 // "tipos sueltos"

unaVariable = 3 // Number, en otros lenguajes, 'int'
unaVariable = 0 // NULL
unaVariable = 0.178967 // Number, en otros lenguajes, 'float'
unaVariable = true // Boolean
unaVariable = false // Boolean
unaVariable = 'una frase' // String, cadena de caracteres
unaVariable = [1,2,3] // Array, arreglo de datos
unaVariable = { propiedad: 'valor' } // Objeto
unaVariable = function() { alert(123) } // Funcion


// operador de asignacion

a = 2
b = 7

// operadores aritmeticos

c = a + b
console.log( 'la suma de ' + a + ' más ' + b + ' es: ' + c )
//console.log( 'la suma de' , a , 'más' , b , 'es:' , c )

c = a - b
console.log( 'la resta de ' + a + ' menos ' + b + ' es: ' + c )

c = a * b
console.log( 'la multiplicación de ' + a + ' por ' + b + ' es: ' + c )

c = a / b
console.log( 'la división de ' + a + ' entre ' + b + ' es: ' + c )

// operador módulo: arroja el residuo de la division de dos numeros

c = b % a
console.log( 'el residuo de la división de ' + b + ' entre ' + a + ' es: ' + c )


c = Math.pow( a, b )
console.log( 'la potencia ' + b + ' de ' + a + ' es: ' + c )

c = Math.pow( a, 1/b )
console.log( 'la raiz ' + b + ' de ' + a + ' es: ' + c )


// operadores de asignacion

a = 100

a += 50 // equivalente 'a = a + 50'
a -= 25
a *= 2
a /= 4


// operadores de incremento
a = 0

// incrementar postiivamente de 1 en 1
a++
a++
a++

// incrementar negativamente de 1 en 1

a--
a--




// Operadores de Comparación

a = 3
b = 4

// hacen una pregunta, devuelven una Booleana

a == b // igual a
a === b // idéntico a
a != b // distinto a
a !== b // no idéntico a
a >	b // mayor ques
a < b // menor que
a >=	b // mayor o igual que
a <= b // menor o igual que


// Operadores Lógicos

a = 2
b = 3
c = 2
// AND: sumar condiciones
a < b && a === c


// OR: alternar condiciones
a < b || a === b



// NOT: negar una condicion

! a < b



// operador ternario

resultado = ( a < b ) ? 'cierto' : 'falso's
