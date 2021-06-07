<template>
  <section class="container mx-auto m-8 p-4">
      <h2 class="font-bold text-xl text-secondary">LES NOUVEAUTÉS</h2>
      <p class="mb-4">Ils rejoignent l'aventure !</p>
      <div class="bg-gray-300 p-8 rounded-xl">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Restaurant v-for="restaurant in newRestaurants" :key="restaurant.id" :restaurant="newRestaurant"/>
        </div>
        <a href="/NosRestaurants" class="bg-secondary text-white text-sm p-2 btn hover:bg-primary hover:text-white mt-6 inline-block flex w-max m-auto">Voir tous les restaurants</a>
      </div>
  </section>
</template>

<script>
import axios from 'axios'
import Restaurant from './Partials/Restaurant'


export default {
  name: 'New',
  components: {
    Restaurant
  },
  data(){
    return {
      restaurants: null,
      newRestaurants: null
    }
  },

  mounted() {
    axios.get("http://localhost:3000/api/restau/new").then((response) => {
      this.newRestaurants = response.data
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
