/* eslint-disable */
<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper blue">
        <a href="#!" class="brand-logo center-align" style="font-size:20px">OB1-NEM-OB</a>
        <a href="#" data-activates="mobile-nav" class="button-collapse hide-on-med-and-up"><i class="material-icons">menu</i></a>

        <ul class="right hide-on-small-only">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/goals">Goals</router-link>
          </li>
          <li>
            <router-link to="/journey">Journey</router-link>
          </li>
        </ul>
        <ul class="side-nav" id="mobile-nav">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/goals">Goals</router-link>
          </li>
          <li>
            <router-link to="/journey">Journey</router-link>
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
            $(".button-collapse").sideNav({closeOnClick: true});
        });
    },
};
</script>

 <style>

</style>
