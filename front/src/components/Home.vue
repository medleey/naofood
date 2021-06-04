<template>
  <div>
  
    <div class="relative">
      <img src="/img/burger.jpeg">
      <div class="absolute inset-0 h-full w-full flex flex-col justify-center items-center bg-black bg-opacity-50">
        <h1 class="font-bold text-4xl text-white mb-2">Naofood</h1>
        <p class="bg-secondary p-2 text-white baseline">La nouvelle livraison éthique</p>
      </div>
    </div>

    <section class="bg-primary p-4 flex flex-wrap justify-center items-center w-full">
      <div class="mr-4 space-y-2 text-center">
        <div class="flex items-center">
          <i class="fas fa-biking text-secondary mr-2 text-2xl"></i>
          <h2 class="text-secondary font-bold">ZONE DE LIVRAISON - 2,5KM DEPUIS LE CENTRE</h2>
        </div>
        <p class="text-white pb-4">2,5km à vélo, c'est l'assurance d'un repas qui arrive CHAUD !</p>
        <a class="bg-secondary text-white p-2 btn">Commander</a>
      </div>
      <img src="/img/map.jpeg" class="map mt-6 md:mt-0">    
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
  .btn{
    border-radius: 10px;
    cursor: pointer;
  }
  .titles {
    top: 200px
  }
  .map{
    width: 200px;
  }

</style>
