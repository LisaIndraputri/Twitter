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
:root{
  --main-color: #1da1f2;
  --dark-color: #14171a;
  --footer-link: #aab8c2;
  --footer-border: #e6ecf0;
  --footer-color: #fff;

}

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
.wrapper{
  
  height: 94vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: transparent;
  background-color: var(--main-color);
  .left-box{
    
    grid-column: 1/2;
    display: flex;
    justify-content: center;
    align-items: center;
    ul li{
      list-style-type: none;
      font-size: 18px;
      color: white;
      line-height: 24px;
      font-weight: bold;
      margin: 48px auto;
      
    }
  }
  .right-box{
    background-color: white;
    grid-column: 2/-1;
    display: block;
    justify-content: center;
    
    align-items: center;
    .header-right{
      
      text-align: center;
      margin-top: 5vh;
      input{
        margin-right: 12px;
        padding:12px;
        font-size: 14px;
        color: gray;
        width: 200px; 
      }
      p a{
        color: var(--footer-link);
        font-size: 14px;
        margin-left: 25px;
      }
    }
    .card-login{
      max-width: 350px;
      display: relative;
      align-items: center;
      justify-content: center;
      margin: auto;
      padding: 0px 0px;
      margin-top: 10vh;
      .head{
        display: flex;
        justify-content: space-between;
      }
      h1{
        font-size: 27px;
        line-height: 32px;
        font-weight: bold;
        margin: 16px auto;
      }
      p{
        color: #14171a;
        font-size: 18px;
        line-height: 24px;
        margin-top: 50px;
        
        font-weight: bold;
      }
      
    }
   
  }
  
  .btn-login{
        
        color: var(--main-color);
        border: 1px solid var(--main-color);
        
      }
      .btn-register{
        
        color: #fff;
        border: 1px solid #fff;
        background-color: var(--main-color);
      }
      .btn-wide{
        
        width:100%;
        margin-bottom: 16px;
        height: 35px;
      }
      .round{
        border-radius: 100px;
        box-shadow: none;
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
        line-height: 20px;
        padding: 6px 16px;
        position: relative;
        text-align: center;
        white-space: nowrap;
      }
}
.bottom-box{
    background-color:var(--footer-color);
    grid-column: 1/-1;
    border-top: 1px solid var(--footer-border);
    justify-content: center;
    align-items: center;
  

    ul {
      text-align: center;
        li{
          display: inline-block;
          margin-left: 10px;
          margin-right: 10px;
          margin-top: 7px;
          
            font-size: 12px;
            color: var(--footer-link);
          
            
          
        }
        
    }
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
