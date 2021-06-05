<template>
  <section class="container mx-auto m-8 p-4">
      <a href="/"><i class="fas fa-chevron-left mr-2 mb-6"></i>Retour</a>
      <h2 class="font-bold text-xl mb-2 text-secondary uppercase">Nos restaurants</h2>
      <div class="bg-gray-300 p-8 rounded-xl">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white text-center w-full rounded-xl relative card">
            <div class="items-center flex">
              <img src="img/burger.jpeg" class="bubble ml-4 object-cover">
              <img src="img/burger.jpeg" class="img-restau object-cover">
            </div>
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
      </div>
  </section>
</template>

<script>
export default {
  name: 'NosRestaurants',
  
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
