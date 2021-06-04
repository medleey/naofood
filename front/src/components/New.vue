<template>
  <div>
    <section class="container mx-auto m-8">
        <h2 class="font-bold text-xl text-secondary">LES NOUVEAUTÉS</h2>
        <p class="mb-4">Ils rejoignent l'aventure !</p>
        <div class="flex flex-wrap">
          <div class="bg-gray-300 p-8 bg-card">
              <div class="card bg-white p-4 text-center">
                  <img src="img/burger.jpeg">
                  <div class="content">
                    <h3 class="font-bold text-secondary text-lg mt-2">Nom restaurant</h3>
                    
                    <h4>TYPE DE RESTAURANT</h4>
                    <p class="mt-2 mb-4 text-sm">
                        Une rôtisserie dans un esprit streetfood qui vous propose des recettes savoureuses inspirées de la cuisine portugaise et espagnole
                    </p>
                    <a class="bg-primary text-white text-sm p-2 btn hover:bg-secondary hover:text-primary my-2">Voir la carte</a>
                  </div>
              </div>
              <div class="bg-gray-300 p-8 bg-card">
                <div class="card bg-white p-4 text-center">
                    <img src="img/burger.jpeg">
                    <div class="content">
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
        </div>
    </section>
  </div>
  
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
  img{
    height: 150px;
    max-width: 250px;
    width: 100%;
    border-top-right-radius: 20px;
  }
  .btn{
  border-radius: 10px;
  }
  .content{
    padding: 0 20px 0 0;
  }
</style>
