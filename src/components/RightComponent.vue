<template>
       <div class="right-box">
        <div class="header-right">
          <input type="text" v-model="user.name">
          <input type="password"  v-model.lazy="user.pass">
          <button class=" btn-login round" @click="submitlogin"> Masuk</button>
          <p><a href="#">Lupa kata sandi?</a></p>
        </div>

        <div class="card-login">
          <div class="head">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" style="color:var(--main-color); font-size:40px;"/>
            <button class=" btn-login round login-box"> Masuk</button>
          </div>
          <h1>Lihat apa yang sedang terjadi di seluruh dunia saat ini</h1>
          <p>Bergabunglah dengan Twitter sekarang juga.</p>
          <button class=" btn-register btn-wide round">Daftar</button>
          <button class=" btn-login btn-wide round">Masuk</button>
        </div>
      </div>
</template>

<script>

import axios from 'axios'
export default {
  name: '',
  data(){
    return{
      user:{
        name:'Ponsel, email, atau nama pengguna',
        pass:'Kata Sandi' 
      }
      
    }
  },
  methods:{
    submitlogin(){
      // axios.post('https://vues-http-174a0.firebaseio.com/data.json', this.user)
      //   .then(response => {
      //     console.log(response)
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   })
      this.$store.dispatch('submitlogin', this.user).then(response => (console.log(response)));
    }
  }
  
}
</script>


