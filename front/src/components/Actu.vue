<template>
  <div>
    <div class="container mx-auto p-4">
        <h2 class="font-bold text-xl text-secondary pb-2">L'ACTU NAOFOOD</h2>
        <div class="bg-secondary container mx-auto p-4 rounded-xl">
            <a href="#" class="pointer">
                <p class="text-white texte-xs mx-auto text-center p-4">30 août 2020</p>
                <div class="bg-white p-4 rounded-xl card-actu mx-auto m-0">
                    <img src="/img/team.png" class="team mx-auto">
                    <h3 class="font-bold mt-2 text-center">UNE RENTRÉE QUI ENVOIE DU PÂTÉ !</h3>
                    <p class="mt-2">
                        Depuis Novembre 2019, Naofood s'est testée, cherchée, développée...
                        <br>
                        Ajourd'hui Naofood est une entreprise confiante, sûre d'elle, qui va donner 
                        le meilleur pour les prochaines années!
                    </p>
                    <p class="mt-2">
                        Peluches, dons aux associations, nouvelle livraison spécifique et adaptée, éthique, 
                        partenariats, coopérative, salariat... Autant de différences qui nous éloignent d'un modèle 
                        économique, mais qui nous rapprochent de vous! <br><br>
                        Car c'est bien grâce à vous que nous existons et que nous continuerons de rayonner. Parce 
                        que le soutien et la coopération des Nantais, c'est notre énergie durable!
                        <br>On vous en dit plus dans cet artcile =>
                    </p>
                </div>
            </a>
        </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'Actu',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
    width: 100px; 
}
ul {
  list-style-type: none;
  padding: 0;
}
.btn{
    border-radius: 20px;
    cursor: pointer; 
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  transition: 0.2s ease-out;
}
.team{
    width: 355px;
    height: auto;
    border-radius: 20px
}
.card-actu{
    max-width: 400px;
    box-shadow: 0 2px 20px 0 rgb(0 0 0 / 60%);
    margin: 150px auto 30px auto;
}
.team {
    margin-top: -180px;
}
</style>
