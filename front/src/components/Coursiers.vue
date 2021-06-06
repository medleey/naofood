<template>
  <section class="container mx-auto m-8 p-4">
      <a href="/"><i class="fas fa-chevron-left mr-2 mb-6"></i>Retour</a>
      <h2 class="font-bold text-xl mb-2 text-secondary uppercase">Nos Coursiers</h2>
      <div class="bg-gray-300 p-8 rounded-xl">
        <div class="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div class="text-center w-full rounded-xl card">
            <img src="img/burger.jpeg" class="bubble mx-auto object-cover">
            <div class="content p-4">
                <h3 class="font-bold text-primary text-lg mt-2">Nom coursier</h3>
                <p class="mb-4 text-sm">
                    Coéquipier : John Doe
                </p>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'Coursiers',
  
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
