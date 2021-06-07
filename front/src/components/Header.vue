<template>
  <div>
    <header class="flex justify-between items-center container mx-auto p-4">
        <a href="/"><img src="/img/logo-naofood.svg"></a>
        <nav class="hidden lg:flex">
            <ul>
                <li><a href="/">Accueil</a></li>
                <li><a href="/NosRestaurants">Nos restaurants</a></li>
                <li><a href="/NosAssociations">Nos associations</a></li>
                <li><a href="/NosPartenaires">Nos partenaires</a></li>
                <li><a href="/Coursiers">Nos Coursiers Nao</a></li>
                <li><a href="/Contact">Contact</a></li>
            </ul>
        </nav>
        <a href="https://naofood.coopcycle.org/fr/restaurants" class="bg-primary text-white p-3 btn hover:bg-secondary hover:text-primary">Commander</a>
        <div class="cursor-pointer lg:hidden mt-3 mb-5" id="burger" @click="isOpen = !isOpen">
            <span></span>
        </div>
    </header>
    <div id="menuMobile" class="menu-mobile" :class="{'open' : isOpen}">
    <div class="w-full h-4 bg-secondary"></div>
        <ul class="flex flex-col space-y-10 pt-4">
          <li><a href="/">Accueil</a></li>
          <li><a href="/NosRestaurants">Nos restaurants</a></li>
          <li><a href="/NosAssociations">Nos associations</a></li>
          <li><a href="/NosPartenaires">Nos partenaires</a></li>
          <li><a href="/Coursiers">Nos Coursiers Nao</a></li>
          <li><a href="/Contact">Contact</a></li>
      </ul>
        <div class="menu-mobile--2 bg-secondary"></div>
    </div>
    <div class="w-full h-4 bg-secondary"></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isOpen: false, 
    }
  }
  
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

#burger{
  width: 40px;
  height: 4px;
  position: relative;
  cursor: pointer;
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
  content: '';
  position: absolute;
  width: 100%;
  height: 4px;
  background-color: black;
  transition: transform 0.5s ease-in-out;
}

#burger span::before{
  transform: translateY(-10px);
}

#burger span::after{
  transform: translateY(10px);
  margin-bottom: 30px;
}

#burger.active span{
  background-color: transparent;
}

#burger.active span::before{
  transform: translateY(0px) rotateZ(-45deg);
}

#burger.active span::after{
  transform: translateY(0px) rotateZ(45deg);
}
.menu-mobile{
  position: absolute;
  width: 100%;
  height: 100vh;
  left: -100vw;
  transition: 0.5s;
  z-index: 999;   
}
.menu-mobile>ul {
  background: white;
  z-index: 10;
  width: 70%;
  height: 100%;
  padding-top: 40px;
  align-items: center;
}
.menu-mobile>ul>li>a{
  border-bottom: solid 1px orange;
  padding-bottom: 20px;
}
.menu-mobile--2 {
  opacity: 0.8;
  position: absolute;
  height: 100vh; 
  width: 100%;
  z-index:-1; 
  top: 0;
}
.items {
  padding: 15px;
  text-decoration: none;
  color: #000;
  border-bottom: 1px solid #e6e6e6;
} 
.open {
  left: 0;
}
</style>
