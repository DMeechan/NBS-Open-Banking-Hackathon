/* eslint-disable */
<template>
  <div id="app">
      <h1>NBS Open Banking Hackathon - OB1-NEM-OB</h1>
      <img src="./assets/logo.png">
      <p>
          <router-link to="/">Home</router-link>
          <router-link to="/hello">Hello</router-link>
      </p>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
