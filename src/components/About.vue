<template>
  <div class="wrapper">
    
   <button @click="fetchData">Get Data</button>
  <ul>
    <li v-for="(u, index) in users" :key="index">{{u.name}}--{{u.pass}}</li>
  </ul>
   
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'about',
  data(){
    return{
      users: []
    }
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


</style>
