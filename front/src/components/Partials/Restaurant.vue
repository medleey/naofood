<template>
  <div class="bg-white text-center mx-auto w-full rounded-xl relative card">
    <div class="items-center flex">
      <img :src="restaurant.logo" class="bubble aboslute ml-4 object-cover">
      <img :src="restaurant.banner" class="img-restau object-cover">
    </div>
    <div class="content p-4">
      <h3 class="font-bold text-secondary text-lg mt-2">{{restaurant.title}}</h3>
      <h4 class="uppercase">{{restaurant.subtitle}}</h4>
      <p class="mt-2 mb-4 text-sm">
          {{restaurant.description}}
      </p>
      <a :href="restaurant.link" class="bg-primary text-white text-sm p-2 btn hover:bg-secondary hover:text-primary my-2">Voir la carte</a>
    </div>
  </div>
</template>
<script>
export default {
  name:"Restaurant",
  props: [
    'restaurant'
  ],
  
}
</script>

<style scoped>
.bubble {
    height: 140px;
    width: 140px;
    border-radius: 50%;
    position: absolute;
    border: solid 2px orange;
  }
  .img-restau {
    width: 70%;
    height: 150px;
    margin-left: auto;
    border-top-right-radius: 10px; 
  }
  .btn{
    border-radius: 10px;
    cursor: pointer;
  }
  a {
    transition: 0.2s ease-out;
  }
  
</style>