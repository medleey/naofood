<template>
  <div class="bg-primary">
    <div class="flex flex-wrap justify-between items-start container mx-auto p-4">
        <img src="/img/logo-naofood.svg">
            <div>
                <h2>Réseaux sociaux</h2>
                <ul class="flex space-x-4">
                    <li class="network"><a href="#"><i class="fab fa-facebook"></i></a></li>
                    <li class="network"><a href="#"><i class="fab fa-instagram"></i></a></li>
                    <li class="network"><a href="#"><i class="fab fa-twitter"></i></a></li>
                </ul>
            </div>
            <div>
                <h2>À propos</h2>
                <ul class="flex flex-col">
                    <li><a href="#">Qui sommes-nous ? </a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div>
                <h2>Informations</h2>
                <ul class="flex flex-col">
                    <li><a href="#">Mentions légales</a></li>
                </ul>
            </div>
            
        
    </div>
    <p class="pb-4 text-center">©2021 - Naofood. Tous droits réservés. Site réalisé par <a href="https://start-win.fr/" class="font-bold">Start-Win</a></p>
  </div>
  
</template>

<script>
export default {
  name: 'Footer',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
    width: 100px;
}
h2 {
    color: white;
    font-weight: bold;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  color: white;
  margin: 0;
}
.network {
    color: darkorange;
}
p{
    color: darkorange;
}

</style>
