<!-- section#artistas -->
<section id="artistas">

   <h1>
      Artistas
   </h1>

   <ul>

      <?php for( $i=0; $i<12; $i++ ) : ?>

         <li>
            <header>
               <h4>
                  Nombre del Artista
               </h4>
            </header>

            <div class="imagen">
               <img src="http://unsplash.it/400/300?random=<?php echo $i ?>" alt="" />
            </div>

            <footer>
               <ul>
                  <li>
                     Género 1
                  </li>
                  <li>
                     Género 2
                  </li>
               </ul>

               <button>
                  Ver
               </button>
            </footer>

         </li>

      <?php endfor; ?>

   </ul>

</section>
