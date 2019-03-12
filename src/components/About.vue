<template>
  <div class="wrapper_1">
  <Nav/>
  <scroll-container>
  <scroll-page id="page-1">
    <div class="main">

    </div>
  </scroll-page>
  <scroll-page id="page-2">2</scroll-page>
  <scroll-page id="page-3">3</scroll-page>
</scroll-container>
   <button @click="fetchData">Get Data</button>
  <ul>
    <li v-for="(u, index) in users" :key="index">{{u.name}}--{{u.pass}}</li>
  </ul>
  
   
  </div>
</template>

<script>
import Nav from './Nav.vue'
import { Carousel, Slide } from 'vue-carousel';
import axios from 'axios'
export default {
  name: 'about',
  data(){
    return{
      users: []
    }
  },
  components:{
    Nav,
    Carousel,
    Slide
  },
  methods: {
    fetchData(){
      axios.get('https://vues-http-174a0.firebaseio.com/data.json')
        .then(response => response.data)
        .then(data => {
          const resultArray = [];
          for(let key in data){
            resultArray.push(data[key]);
          }
          this.users = resultArray;
        });
    }
  }
}
</script>

<style lang="scss">
.wrapper_1{
  height: 94vh;
  background-color: transparent;
  
}
.main{
  background-color: cadetblue;
  height: 10vh;
}
scroll-container {
  display: block;
  width: 350px;
  height: 200px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
scroll-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 5em;
}

</style>
