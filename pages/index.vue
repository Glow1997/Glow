<template>
  <div class="flex h-screen w-full bg-teal-200">
   <div class="m-auto w-full px-5 md:w-1/3">
      <div class="pl-1 text-black font-medium text-2xl tracking wide text-center">
        Inventory System
      </div>
      <form>
        <div class="my-2 ">
          <inputElement
            :labelName="'EMAIL'"
            :labelId="'email'"
            :inputType="'email'"
            :model="email"
            @input="email = $event"
            :disabled="false"
          />
        </div>
        <div class="my-2 ">
          <inputElement
            :labelName="'PASSWORD'"
            :labelId="'password'"
            :inputType="'password'"
            :model="password"
            @input="password = $event"
            :disabled="false"
          />
        </div>
        <button type="button" class="
          transition
          duration-500
          ease-in-out
          bg-blue-600
          rounded-xs
          w-full
          py-3
          text-white
          font-sans
          font-bold
          tracking-wide
          hover:bg-blue-700
          hover:text-gray-400
          active:outline-none
          focus:outline-none
          "
          @click="login"
          > SIGN IN </button>
      </form>
    </div>
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue';
  import InputElement from "~/components/items/Input.vue";
  import { mapState, mapActions } from "vuex";

  export default {
    transition:{
      name:"inventory",
      mode:"out-in",
      duration: { enter: 1000, leave: 500 },
      enterActiveClass: "animated fadeIn",
      leaveActiveClass: "animated fadeOut" /* animate.com */
    },
    components: {
      Logo,
      InputElement
    },
    data: function(){
      return{
        email: "",
        password: ""
      }
    },  
    computed:{ 
      ...mapState({
          isLoggedIn : state => state.auth.isLoggedIn,
      })
    },
    methods: {
      login: function(){
        this.googleLogin({ email:this.email, password:this.password})
      },
      ...mapActions({
          googleLogin: "auth/firebaseLogin"
      })
    },
    mounted(){
        if(this.isLoggedIn){
          this.$router.push("/dashboard")
        }
    }
  }
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
