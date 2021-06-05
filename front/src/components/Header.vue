<template>
  <div>
    <div class="flex justify-between items-center container mx-auto p-4">
        <img src="/img/logo-naofood.svg">
        <nav>
            <ul>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Nos restaurants</a></li>
                <li><a href="#">Nos associations</a></li>
                <li><a href="#">Nos partenaires</a></li>
                <li><a href="#">Nos Coursiers Nao</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <a class="bg-primary text-white p-3 btn hover:bg-secondary hover:text-primary">Commander</a>
    </div>
    <div class="w-full bg-secondary h-4"></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  
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
</style>
