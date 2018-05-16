<template>
  <center>
    
    <img class="responsive-img z-depth-2" style="width: 500px;" src="../assets/obgif.gif" />
    <div class="section"></div>

    <h5 class="indigo-text">Please, login into your account</h5>
    <div class="section"></div>

    <div class="container">
      <div class="z-depth-1 grey lighten-4 row" style="display: inline-block; padding: 25px 40px 0px 40px; border: 1px solid #EEE;">

        <div class="col s12">
          <div class='row'>
            <div class='col s12'>
            </div>
          </div>

          <div class='row'>
            <div class='input-field col s12'>
              <input class='validate' type='email' name='emasil' id='email'/>
              <label for='email'>Enter your email</label>
            </div>
          </div>

          <div class='row'>
            <div class='input-field col s12'>
              <input class='validate' type='password' name='password' id='password'  />
              <label for='password'>Enter your password</label>
            </div>
            <label style='float: right;'>
              <a class='pink-text' href='#!'><b>Forgot Password?</b></a>
            </label>
          </div>

          <br />
          <center>
            <div class='row'>
              <router-link to="/dashboard" class="col s12 btn btn-large waves-effect indigo">Login</router-link>
            </div>
          </center>
        </div>
      </div>
    </div>
    <!-- <a href="#!">Create account</a> -->
  </center>
</template>

<script>

    $(document).ready(function(){
      $(".button-collapse").sideNav();
    });
    
</script>
