// Funciones


// Un conjunto de instrucciones que puede ser invocado desde otro lugar


// Declarar una función:
function saludar() {

   alert( 'Hola!' )
   alert( 'Cómo estás?' )

}

saludar()


function despedir() {
   alert( 'Nos Vemos!' )
}



function conversar() {
   alert( 'Cómo te ha ido?' )
}





// Uso de Parámetros en Funciones:

function sumar( a, b ) {
   alert( "el resultado es " + ( a + b ) )
}



// ambitos (Scope) de variables en funciones
// los parámetros sólo viven en el ámbito (Scope) de la función

console.log( a, b )

// las variables también viven en cierto ámbito:

function funcionConVariables() {

   // al usar 'var', la sig. variable existe solo dentro de la funcion
   var unaVariableConAmbito = "una variable"

   // al no usar 'var', la sig. variable existe en todo el programa
   unaVariableGlobal = "una variable global"

   console.log( unaVariableConAmbito, unaVariableGlobal )

}

console.log( unaVariable )











// Funciones que retornan valores


function generarNumero() {

   var numero = Math.round( Math.random() * 100 )

   console.log( "el numero generado es " + numero )

   return numero

}



function sumaAleatoria() {

   var a = generarNumero()
   var b = generarNumero()

   var suma = a + b

   console.log( "la suma es", suma )

   return suma

}





// la palabra 'return' interrumpe la funcion


function dejarPasar( edad, boleto ) {

   if( edad < 18 ) {
      console.log( 'no pueden pasar menores de edad')
      return 0
   }

   if( ! boleto ) {
      console.log( 'sin boleto no puede pasar')
      return 0;
   }

   console.log( 'dejar pasar')

   return 1

}
