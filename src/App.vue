/* eslint-disable */
<template>
  <div id="app">
    <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">OB1-NEM-OB</a>
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>

      
      <ul class="right hide-on-small-only">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
      </ul>
      <ul class="side-nav" id="mobile-demo">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
      </ul>

</div>
    </nav>
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: "App",

    created() {
        $(document).ready(function() {
            $(".button-collapse").sideNav();
        });
    },
};
</script>

<style>
/* #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
} */
</style>
