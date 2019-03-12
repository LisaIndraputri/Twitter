<template>

  <div id="app">
    
      <router-view></router-view>
      <Footer/>
  </div>
 
</template>

<script>


import Footer from './components/Footer.vue'
export default {
  components: {
    Footer
  },
  
  
}
</script>

<style lang="scss">


*{
  margin: 0;
  padding: 0;
  
}

p,a,h1,h2,h3{
  font-family: 'Open Sans', sans-serif;
}
#app{
  height: 100vh;
}



@media screen and (max-width: 1025px) {
    .header-right {
        display: none !important;
    }
}
@media screen and (min-width: 1025px) {
    .login-box{
      display: none !important;
    }
}
</style>
