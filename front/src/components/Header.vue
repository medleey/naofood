<template>
  <div>
    <div class="flex justify-between items-center container mx-auto p-4">
        <img src="/img/logo-naofood.svg">
        <nav>
            <ul>
                <li><a href="/">Accueil</a></li>
                <li><a href="/NosRestaurants">Nos restaurants</a></li>
                <li><a href="/NosAssociations">Nos associations</a></li>
                <li><a href="/NosPartenaires">Nos partenaires</a></li>
                <li><a href="/Coursiers">Nos Coursiers Nao</a></li>
                <li><a href="/Contact">Contact</a></li>
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

#burger {
  width: 40px;
  height: 4px;
  position: relative;
}
#burger span {
  width: 100%;
  height: 4px;
  background-color: black;
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.5s ease-in-out;
}

#burger span::before, #burger span::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 4px;
  background-color: black;
  transition: transform 0.5s ease-in-out;
}

#burger span::before {
  transform: translateY(-10px);
}

#burger span::after {
  transform: translateY(10px);
  margin-bottom: 30px;
}

#burger.active span {
  background-color: transparent;
}

#burger.active span::before {
  transform: translateY(0px) rotateZ(-45deg);
}

#burger.active span::after {
  transform: translateY(0px) rotateZ(45deg);
}
</style>
