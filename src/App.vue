/* eslint-disable */
<template>
  <div id="app">
    <div class="navbar-fixed">
      <nav>
      
      <div class="nav-wrapper blue">
        <a href="#!" class="brand-logo center" style="font-size:20px">OB Hackathon</a>
        <a href="#" data-activates="mobile-nav" class="button-collapse hide-on-med-and-up"><i class="material-icons">menu</i></a>

        <ul class="right hide-on-small-only">
          <li>
            <router-link to="/dashboard">Dashboard</router-link>
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
      </div>
      <ul style="padding-top:25px" class="bold side-nav" id="mobile-nav">
          <li>
            <router-link class="blue-text" to="/dashboard"><i class="material-icons">home</i>Accounts</router-link>
          </li>
          <li>
            <router-link class="blue-text" style="margin-top:50px"  to="/goals"><i class="material-icons">beenhere</i>Goals</router-link>
          </li>
          <li>
            <router-link class="blue-text " style="margin-top:50px"  to="/journey"><i class="material-icons">card_travel</i>Journey</router-link>
          </li>
        </ul>
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
