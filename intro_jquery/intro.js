// Javascript puro:

// document.getElementById('titulares').style.backgroundColor = '#eee'


// titulos = document.getElementsByClassName('titulo')

// for( i in titulos ) titulos[i].style.color = 'red'


// jquery

// jquery utiliza el concepto de 'selector' para seleccoinar elmeentos del Documento

// un objeto de jquery represetna los elementos seleccionados por el selector

// '$' representa la librería jQuery
// () paréntesis dan espacio para añadir un selector
// selector es una cadena de caracteres que coincide con un selector de CSS

/*
'#identidad'
'.nombreClase'
'nombreEtiqueta'
'nombreEtiqueta[atributo=valor]'
*/
//
// selector = '#titulares'
//
// $( selector )


// ejecutar instrucciones cuando el documento haya terminado de cargar:
$(document).ready(function(){

   // modificar propiedades visuales:
   // utilizaremos un Objeto de Javascript para indicar las propiedades

   // seleccionar por identidad:
   $('#titulares').css({
      backgroundColor: '#fa0', // las propiedades que llevan guion en css son escritas aquí con camelCase
      padding: 50
   })

   // seleccionar por clase:
   $('.titulo').css({
      color: '#0a0'
   })

   // seleccionar por etiqueta:
   $('h2').css({
      color: '#00a'
   })



   // Modificación del DOM

   $('h1').html( 'Introducción a jQuery!!' )

   titulo2 = $('h2')

   // Duplicar un Elemento y modificar el contenido de la copia:
   // Observemos el modo en que jQuery nos permite CONCATENAR métodos

   titulo2.clone() // generar una copia
   .appendTo('#titulares') // introducir al final de la caja con la id 'titulares'
   .html('Un título recién creado') // modificamos su HTML


   // elminiar un elemento

   titulo2.remove() // eliminar el titular 'h2' original despues de haberlo duplicado


   // crear un elemento nuevo

   nuevotitulo = $('<h3>')

   nuevotitulo.html('titulo creado desde cero')
   .appendTo('#titulares')


   // añadir / quitar clases

   nuevotitulo.addClass('titulo')

   $('.titulo').addClass('mayusculas')

   $('.gris').removeClass('gris')



   // Seleccionar elementos hijos:


   titularesHijos = $('#titulares').children()

   // mostrar cuántos hijos hay:
   console.log( "numero de hijos:", titularesHijos.length )

   // ejecutar una funcion por cada uno de los hijos:
   titularesHijos.each(function( indice ){

      //  cada uno de los hijos vive en el objeto $(this)

      cadaHijo = $(this)

      // recuperar el HTML
      contenido = cadaHijo.html()

      console.log( "el contenido del hijo", indice, "es", contenido )

      // Si le pasamos un parámetro a .html(), se cambia el contenido
      cadaHijo.html( indice + ": " + contenido )

   })

   // INTERACCIÓN:

   $('#boton_1').click(function(){

   })

   $('#boton_2').click(function(){

      // animate tiene 3 parametros
         // 1) propiedades visuales a animar
         // 2) duracion
         // 3) funcion a ejecutar al terminar
      $('#texto-scroll').animate(
         {
            left: 0
         },
         3000,
         function() {
            alert("animacion terminada")
         }
      )

   })

   $('#texto-scroll').scroll(function(){

      cuantoScrollPct = $(this).scrollTop() / $(this).height()
      console.log( cuantoScrollPct )

      // componentes RGB son enteros entre 0 y 255

      cuantoRojo = Math.round(cuantoScrollPct * 255)

      // garantizar que se mantenga entre 0 y 255
      cuantoRojo = Math.max( cuantoRojo, 0 )
      cuantoRojo = Math.min( cuantoRojo, 255 )


      $(this).css({
         backgroundColor: 'rgb(' + cuantoRojo + ',40,100)'
      })

   })




   console.log('intro jquery lista')

})
