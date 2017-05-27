$(document).ready(function(){

   $('.caja').addClass('v-center')

   centrarContenidos()

   interaccionScroll()

   console.log("Ejemplo Interacción Listo.")

})



function interaccionScroll() {

   $('.caja').appear()


   $('.caja').on('appear', function(event, $all_appeared_elements) {

      laCajaQueAparecio = $(this)

      cuantoScrollLlevamos = $('html').scrollTop()
      // console.log( "cuantoScrollLlevamos", cuantoScrollLlevamos )

      dondeEmpiezaLaCaja = laCajaQueAparecio.offset().top
      // console.log( "dondeEmpiezaLaCaja", dondeEmpiezaLaCaja )

      alturaDeVentana = $(window).height()

      diferencia = dondeEmpiezaLaCaja - cuantoScrollLlevamos

      if( diferencia < ( alturaDeVentana * 0.6 ) ) {

         laCajaQueAparecio.children().addClass('visible')

      } else {

         laCajaQueAparecio.children().removeClass('visible')

      }

   })

   $('.caja').on('disappear', function(event, $all_disappeared_elements) {

      $(this).children().removeClass('visible')

   });


}




function centrarContenidos() {

   // Centrado Vertical:
   // Iterar por cada elemento que tenga la clase 'v-center'
   $('.v-center').each(function(){

      elementoPadre = $(this)

      elementosHijos = elementoPadre.children()

      alturaHijos = 0

      elementosHijos.first().css({
         marginTop: 0
      })

      elementosHijos.last().css({
         marginBottom: 0
      })

      // ahora, iterar por cada uno de estos elementos hijos:
      elementosHijos.each(function(){
         elementoHijo = $(this)
         // sumar la altura del elemento hijo a la altura de todos los hijos en conjunto
         alturaHijos += elementoHijo.height()
      })

      diferencia = elementoPadre.height() - alturaHijos
      // dividir diferencia entre 2
      espacioSuperior = diferencia / 2

      // dar espaciado superior al padre, para que empuje sus hijos hacia abajo
      elementoPadre.css({
         paddingTop: espacioSuperior
      })

   })

}
