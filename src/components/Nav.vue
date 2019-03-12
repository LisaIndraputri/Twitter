<template>
       <div class="nav ">   
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" style="color:white; font-size:40px;"/>
            <span class="tag-about"> About </span>
          </router-link>
         
          <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div class="navbar-start">
            <router-link to="/" class="navbar-item">
              Home
            </router-link>
            
            <div class="navbar-item has-dropdown is-hoverable">
              <router-link to="/" class="navbar-link is-arrowless">
                Docs
              </router-link>
              <div class="navbar-dropdown is-boxed">
                <router-link to="/" class="navbar-item">
                  Overview
                </router-link>
                <router-link to="/" class="navbar-item">
                  Overview
                </router-link>
                <router-link to="/" class="navbar-item">
                  Overview
                </router-link>
                <hr class="navbar-divider">
                <router-link to="/" class="navbar-item">
                  Element
                </router-link>
                <a class="navbar-item is-active" href="#">
                  Components
                </a>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <router-link to="/" class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" >
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" style="color:var(--main-color); font-size:20px;"/>
                    <span>
                      Tweet
                    </span>
                  </router-link>
                </p>
                <p class="control">
                  <router-link to="/" class="button is-primary" >
                    
                    <span>Download</span>
                  </router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
       </div>
</template>

<script>

export default {
  name: '',
  data(){
    return{
      
      
    }
  },
  methods:{
    
  },
  
  
}
</script>





