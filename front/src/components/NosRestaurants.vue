<template>
  <section class="container mx-auto m-8 p-4">
      <a href="/"><i class="fas fa-chevron-left mr-2 mb-6"></i>Retour</a>
      <h2 class="font-bold text-xl mb-2 text-secondary uppercase">Nos restaurants</h2>
      <div class="bg-gray-300 p-8 rounded-xl">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <Restaurant v-for="restaurant in restaurants" :key="restaurant.id" :restaurant="restaurant"/>
        </div>
      </div>
  </section>
</template>

<script>
import axios from 'axios'
import Restaurant from './Partials/Restaurant.vue'

export default {
  name: 'NosRestaurants',
  components: {
    Restaurant
  },
  data(){
    return {
      restaurants: null
    }
  },
  
  mounted() {
    axios.get("http://localhost:3000/api/restau/").then((response) => {
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
</style>
