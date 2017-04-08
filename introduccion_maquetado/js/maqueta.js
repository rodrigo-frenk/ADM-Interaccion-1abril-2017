$(document).ready(function() {

	$(".imgLiquidFill").imgLiquid()
	$(".imgLiquidNoFill").imgLiquid({
      fill: false
   })
	$(".imgLiquidNoFillLeft").imgLiquid({
      fill: false,
      horizontalAlign: "left"
   })


   // Centrado Vertical:

   // por cada uno de los elementos que tengan la clase 'v-center'
   $('.v-center').each(function(){

      // seleccionamos los elementos hijos de cada contenedor
      contenedor = $(this)

      hijos = contenedor.children()

      // vamos a eliminar el marginTop del primer hijo
      hijos.first().css({
         marginTop: 0
      })
      // vamos a eliminar el marginBottom del ultimo hijo
      hijos.last().css({
         marginBottom: 0
      })

      alturaHijos = 0

      // recorrer cada uno de sus hijos para obtener su altura
      hijos.each(function(){

         hijo = $(this)

         // sumar la altura de cada hijo a la altura total
         alturaHijos += hijo.height()

      })

      diferencia = contenedor.height() - alturaHijos

      distanciaParaCentrar = diferencia / 2

      contenedor.css({
         paddingTop: distanciaParaCentrar
      })


   })



})

console.log('Maqueta: JS listo')
