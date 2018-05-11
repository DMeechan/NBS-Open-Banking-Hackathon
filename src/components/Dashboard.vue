<template>
  <div class="container">
    <div class="row" />
    <div class="row" />

    <!-- Header -->
    <div class="row valign-wrapper">
      <div class="col s3">
        <img class="responsive-img circle" src="http://mylowersaxony.com/magnoliaPublic/dam/jcr:abde16d8-a09d-4f19-b6b3-d48ddd80aca5/curiositytravels-profile-200px.jpg">
      </div>
      <div class="col s9 hide-on-small-only">
        <h3>{{ header }}</h3>
        <h4>{{ subheader }}</h4>
      </div>
      <div class="col s9 hide-on-med-and-up">
        <h4>{{ header }}</h4>
        <h5>{{ subheader }}</h5>
      </div>
    </div>

    <!-- Adding goals list -->
    <div class="s3">
        <div class="carousel"> 
          <a class="carousel-item center" v-for="account in accounts" >
             <div class="card grey lighten-3">
              <div class="card-content activator" style="padding-bottom:200px">
                <span class="card-title activator bold-text grey-text text-darken-4">{{account.Account.Account.SecondaryIdentification}}</i></span>
                <span class="card-title activator grey-text text-darken-4">{{account.Account.Account.Name}}</i></span>
                <span class="card-title activator grey-text text-darken-4">{{account.Account.Account.Name}}</i></span>
              </div>
              
            </div>


          </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Dashboard",
    data() {
        return {
            accounts: [],
            balances: [],
            header: "Hey, Alice!",
            subheader: "These are your accounts.  ",
            add: [
              {
                name: "Go on holiday",
                icon: "beach_access",
                amount: 250,
                date: "9 May 2018",
                monthlySaving: 0
              },
              {
                name: "Plan for retirement",
                icon: "home",
                amount: 10000,
                date: "9 May 2018",
                monthlySaving: 0
              }
            ],
            goals: [
              {
                name: "New Home",
                amount: 250,
              },
              {
                name: "Rainy day",
                amount: 25,
              },
            ]
        };
    },
  
  mounted() {
       
   
    $(document).ready(function(){
         $('.collapsible').collapsible();

    });
    this.getAccounts();
    $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: true // Close upon selecting a date,
    
    });
  },

  methods: {
    callback(){
      
      $('.carousel').carousel();
      console.log("callback");

    },
    getAccounts: function() {

      console.log("Test1");

       



      axios
        .get("http://192.168.0.29:9001/static/accounts.json")
        .then((response) => {
        var accounts = [];
        var count = 0;
        console.log("test");
        for(var x=0;x<50;x++) {
          count++;
          accounts.push(response.data.Data[x])
          
        }
        this.accounts = accounts;
        this.$nextTick(() => {
            $('.carousel').carousel();
            console.log("callback");
         // Scroll Down
          })
        // dispatch({ 
        //   JSON(response);
        //   data.accounts = Data;
        // }) //Change
      }).catch((err) => {
        console.log(err);
      })
      
    },

    getBalance: (accountid) => {
      
      axios
        .get("https://ob-api.innovationwide.co.uk/api/accounts/"+accountid+"/balances")
        .then((response) => {

          return(response.data.Data[0].Balance.Amount.Amount);
          
        // dispatch({ 
        //   JSON(response);
        //   data.accounts = Data;
        // }) //Change
      }).catch((err) => {
        console.log(err);
      })

    },

  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
