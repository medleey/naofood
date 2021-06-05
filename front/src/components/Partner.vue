<template>
  <section>
    <div class="container mx-auto mt-8 p-4">
        <h2 class="font-bold text-xl text-secondary">NOUS TRAVAILLONS ENSEMBLE</h2>
        <p class="mb-4">Des partenaires proches de chez nous et qui partagent nos valeurs.</p>

        <div class="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            <a href="#" class="text-center">
                <img src="img/start-win.svg" class="bubble ml-4 object-cover inline-block">
                <div class="content p-4">
                    <p class="text-primary text-sm mt-2 uppercase">Start-Win</p>
                </div>
            </a>
            <a href="#" class="text-center">
                <img src="img/coursiers.jpeg" class="bubble ml-4 object-cover inline-block">
                <div class="content p-4">
                    <p class="text-primary text-sm mt-2 uppercase">Les coursiers Nantais</p>
                </div>
            </a>
            <a href="#" class="text-center">
                <img src="img/PAYG.png" class="bubble ml-4 object-cover inline-block">
                <div class="content p-4">
                    <p class="text-primary text-sm mt-2 uppercase">Pay Green</p>
                </div>
            </a>
            <a href="#" class="text-center">
                <img src="img/ville-nantes.png" class="bubble ml-4 object-cover inline-block">
                <div class="content p-4">
                    <p class="text-primary text-sm mt-2 uppercase">La ville de Nantes</p>
                </div>
            </a>
            <a href="#" class="text-center">
                <img src="img/coopcy.png" class="bubble ml-4 object-cover inline-block">
                <div class="content p-4">
                    <p class="text-primary text-sm mt-2 uppercase">CoopCylce</p>
                </div>
            </a>
        </div>
    </div>
  </section>

  <section>
    <div class="container mx-auto mt-8 p-4">
        <h2 class="font-bold text-xl text-secondary">ILS PARLENT DE NOUS</h2>
        <p class="mb-4">Des partenaires proches de chez nous et qui partagent nos valeurs.</p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href="#" class="text-center">
                <img src="img/bcl.png" class="bubble ml-4 object-cover inline-block">
                <div class="content p-4">
                    <p class="text-primary text-sm mt-2 uppercase">Big City Life</p>
                </div>
            </a>
            <a href="#" class="text-center">
                <img src="img/OUF.png" class="bubble ml-4 object-cover inline-block">
                <div class="content p-4">
                    <p class="text-primary text-sm mt-2 uppercase">Ouest France</p>
                </div>
            </a>
            <a href="#" class="text-center">
                <img src="img/FIGA.png" class="bubble ml-4 object-cover inline-block">
                <div class="content p-4">
                    <p class="text-primary text-sm mt-2 uppercase">Le Figaro</p>
                </div>
            </a>
            <a href="#" class="text-center">
                <img src="img/20m.png" class="bubble ml-4 object-cover inline-block">
                <div class="content p-4">
                    <p class="text-primary text-sm mt-2 uppercase">20 Minutes</p>
                </div>
            </a>
            <a href="#" class="text-center">
                <img src="img/TV.png" class="bubble ml-4 object-cover inline-block">
                <div class="content p-4">
                    <p class="text-primary text-sm mt-2 uppercase">Télénantes</p>
                </div>
            </a>
            <a href="#" class="text-center">
                <img src="img/loire.png" class="bubble ml-4 object-cover inline-block">
                <div class="content p-4">
                    <p class="text-primary text-sm mt-2 uppercase">Ma Vie en territoire Atlantique</p>
                </div>
            </a>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Partner',
  
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
  }
  .img-restau {
    width: 70%;
    height: 150px;
    margin-left: auto;
    border-top-right-radius: 10px; 
  }
</style>
