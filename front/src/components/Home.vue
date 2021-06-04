<template>
  <div> 
    <img src="/img/burger.jpeg">
    
    <div class="container mx-auto text-center titles absolute">
      <h1 class="font-bold text-4xl text-white">Naofood</h1>
      <p class="bg-secondary p-4 text-white baseline">La nouvelle livraison éthique</p>
    </div>

    
    <section class="bg-primary p-4 flex flex-wrap justify-center items-center w-full">
      
      <div class="mr-4 space-y-2">
        <div class="flex items-center">
          <i class="fas fa-biking text-secondary mr-2 text-2xl"></i>
          <h2 class="text-secondary font-bold">ZONE DE LIVRAISON - 2,5KM DEPUIS LE CENTRE</h2>
        </div>
        <p class="text-white">2,5km à vélo, c'est l'assurance d'un repas qui arrive CHAUD !</p>
      </div>
      <img src="/img/map.jpeg" class="map mt-4 md:mt-0">    
    </section>

    <New />

  </div>
</template>

<script>
import New from './New.vue'
export default {
  name: 'Home',

  components: {
    New
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    max-height: 500px;
    width: 100%;
    object-fit: cover;
  }
  .baseline {
    width: fit-content;
    border-radius: 5px; 

  }
  .titles {
    top: 200px
  }
  .map{
    width: 200px;
  }

</style>
