<template>
  <section class="container mx-auto m-8 p-4">
      <h2 class="font-bold text-xl text-secondary">BON ?! ET QU'EST-CE QU'ON MANGE ?</h2>
      <p class="mb-4">Retrouvez notre sélection sur mesure de restaurants Nantais!</p>
      <div class="bg-gray-300 p-8 rounded-xl">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
         <Restaurant v-for="restaurant in restaurants" :key="restaurant.id" :restaurant="restaurant"/>
        </div>
        <a href="/NosRestaurants" class="bg-secondary text-white text-sm p-2 btn hover:bg-primary hover:text-white mt-6 inline-block flex w-max m-auto">Voir tous les restaurants</a>
      </div>
  </section>
</template>

<script>
import axios from 'axios'
import Restaurant from './Partials/Restaurant.vue'

export default {
  name: 'Restaurants',
  components: {
    Restaurant
  },
  data(){
    return {
      restaurants: null
    }
  },
  
  mounted() {
    axios.get("http://localhost:3000/api/restau/3").then((response) => {
      this.restaurants = response.data
    });
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    max-width: 400px;
    height: auto;
  }  
  .btn{
    border-radius: 10px;
    cursor: pointer;
  }
  .content{
    padding: 0 20px 20px 20px;
  }
  a {
    transition: 0.2s ease-out;
  }
  
</style>
