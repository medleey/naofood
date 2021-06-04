<template>
  <section class="container mx-auto m-8">
      <h2 class="font-bold text-xl text-secondary">LES NOUVEAUTÉS</h2>
      <p class="mb-4">Ils rejoignent l'aventure !</p>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-300 p-8 rounded-xl">
        <div class="bg-white text-center w-full rounded-xl">
          <img src="img/burger.jpeg" class="w-full h-36 object-cover rounded-t-xl max-w-xs ml-auto">
          <img src="img/burger.jpeg" class="w-full h-36 object-cover rounded-t-xl max-w-xs ml-auto">
          <div class="content p-4">
            <h3 class="font-bold text-secondary text-lg mt-2">Nom restaurant</h3>
            <h4>TYPE DE RESTAURANT</h4>
            <p class="mt-2 mb-4 text-sm">
                Une rôtisserie dans un esprit streetfood qui vous propose des recettes savoureuses inspirées de la cuisine portugaise et espagnole
            </p>
            <a class="bg-primary text-white text-sm p-2 btn hover:bg-secondary hover:text-primary my-2">Voir la carte</a>
          </div>
        </div>
      </div>
      <a class="bg-secondary text-white text-sm p-2 btn hover:bg-primary hover:text-white my-2">Voir la carte</a>
  </section>
  
</template>

<script>
export default {
  name: 'Footer',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card{
    margin-bottom: 40px;
    box-shadow: 1px 5px 20px 1px #d3d3d3;
    max-width: 400px;
    width: 100%;
    border-radius: 20px;
    padding: 0px 0px 20px 20px;
  }
  .bg-card{
    border-radius: 20px; 
  }
  .btn{
    border-radius: 10px;
    cursor: pointer;
  }
  .content{
    padding: 0 20px 0 0;
  }
  a {
    transition: 0.2s ease-out;
  }
</style>
