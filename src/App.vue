<template>
  <div class="container">

    <app-header v-if="$store.state.isLoggedIn"></app-header>

    <transition mode="out-in" :name="'fade'">

      <router-view></router-view>

    </transition>

  </div>

</template>

<script>

  import appHeader from './components/header/index.vue';

  export default  {

    name: 'app',

    components:{

      appHeader

    }

  }

</script>