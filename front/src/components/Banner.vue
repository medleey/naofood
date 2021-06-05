<template>
  <section>
    <img src="img/naofood-ban.jpeg">
    <div class="container mx-auto mt-8 p-4">
        <h2 class="font-bold text-xl text-secondary">NOS VALEURS</h2>
        <p class="mb-4">Retrouvez notre sélection sur mesure de restaurants Nantais!</p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="text-center">
                <img src="img/Consomacteurs.png" class="bubble ml-4 object-cover inline-block">
                <div class="content p-4">
                    <h3 class="font-bold text-secondary text-lg mt-2">Une consommation qui a du sens !</h3>
                    <p class="mt-2 mb-4 text-sm">
                        2% de chaque commande sont reversés à nos associations partenaires
                    </p>
                </div>
            </div>
            <div class="text-center">
                <img src="img/elephant.png" class="bubble ml-4 object-cover inline-block">
                <div class="content p-4">
                    <h3 class="font-bold text-secondary text-lg mt-2">Des restaurants choisis avec soins !</h3>
                    <p class="mt-2 mb-4 text-sm">
                        Notre équipe goûte et sélectionne pour vous ce qui se fait de mieux en matière de food dans le centre-ville
                    </p>
                </div>
            </div>
            <div class="text-center">
                <img src="img/panda.png" class="bubble ml-4 object-cover inline-block">
                <div class="content p-4">
                    <h3 class="font-bold text-secondary text-lg mt-2">Des coursiers qui aiment leur métier !</h3>
                    <p class="mt-2 mb-4 text-sm">
                        Une équipe de coursiers souriants et passionnés, toujours chauds pour rouler ! 
                    </p>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner',
  
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
    border: solid 2px orange;
  }
  .img-restau {
    width: 70%;
    height: 150px;
    margin-left: auto;
    border-top-right-radius: 10px; 
  }
</style>
