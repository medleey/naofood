<template>
  <section class="container mx-auto m-8 p-4">
      <a href="/"><i class="fas fa-chevron-left mr-2 mb-6"></i>Retour</a>
      <h2 class="font-bold text-xl mb-2 text-secondary uppercase">Contactez-nous ! </h2>
      <p class="mb-4">
        Posez-nous votre question nous vous répondrons dès que possible !<br> 
        Si votre question concerne une commande en cours contactez-nous au 06 73 22 79 11
        </p>
      <div class="rounded-xl form mx-auto">
        <h2 class="bg-gray-300 p-4 font-bold text-xl">Formulaire de contact</h2>
        <div>
          <div class=" p-4 justify-around card flex">
            <img src="img/panda.png" class="bubble object-cover">
            <form>
                <div class="grid md:grid-cols-2 w-full md:space-x-2">
                    <div class="flex flex-col">
                        <label for="name">Prénom</label>
                        <input type="text" id="name" name="name" required class="border-2 rounded-md">
                    </div>
                    <div class="flex flex-col">
                        <label for="lastName">Nom</label>
                        <input type="text" id="lastName" name="lastName" required class="border-2 rounded-md">
                    </div>
                </div>
                <div class="flex flex-col w-full">
                    <label for="phone">Numéro de téléphone</label>
                    <input type="text" id="phone" name="phone" required class="border-2 rounded-md">
                </div>
                <div class="flex flex-col w-full">
                    <label for="email">Adresse email</label>
                    <input type="email" id="email" name="email" required class="border-2 rounded-md">
                </div>
                <div class="flex flex-col w-full">
                    <label for="message">Message</label>
                    <input type="text" id="message" name="message" required class="border-2 rounded-md">
                </div>
                <button type="submit" class="p-2 mt-4 bg-secondary rounded-lg text-white hover:bg-primary">Envoyer</button>
            </form>
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
    h2{
      border-top-right-radius: 20px; 
      border-top-left-radius: 20px; 
    }
    .card {
        box-shadow :1px 5px 20px 1px #d3d3d3;
        border-bottom-right-radius: 20px; 
        border-bottom-left-radius: 20px;
    }
  .btn{
    border-radius: 10px;
    cursor: pointer;
  }
  .content{
    padding: 0 20px 20px 20px;
  }
  button {
    transition: 0.2s ease-out;
  }
  .bubble {
    height: 140px;
    width: 140px;
  }
  .form {
    max-width: 700px;
  }
</style>
