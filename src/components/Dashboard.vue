<template>
  <div class="container">
    <div class="row" />
    <div class="row" />

    <!-- Header -->
    <div class="row valign-wrapper">
      <div class="col s3">
        <img class="responsive-img circle z-depth-2" src="http://mylowersaxony.com/magnoliaPublic/dam/jcr:abde16d8-a09d-4f19-b6b3-d48ddd80aca5/curiositytravels-profile-200px.jpg">
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
    <div class="s3 center">
        <div  id="loader" style="padding-top:200px" >
          <div class="preloader-wrapper row big active">
            <div class="spinner-layer spinner-blue-only">
              <div class="circle-clipper left">
                <div class="circle"></div>
              </div><div class="gap-patch">
                <div class="circle"></div>
              </div><div class="circle-clipper right">
                <div class="circle"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel hidden"> 
          <a class="carousel-item center" style="width:90%" v-for="account in accounts" >
             <div class="card grey lighten-3 activator">
              <div class="card-content activator" >
                <i class="material-icons left">account_balance</i><span class="card-title activator bold-text grey-text text-darken-4">{{account.info.Account.Account.SecondaryIdentification}}</i></span>
                <i class="material-icons left">contacts</i><span class="card-title activator grey-text text-darken-4">{{account.info.Account.Nickname}}</i></span>
                <i class="material-icons left">account_balance_wallet</i><span class="card-title activator grey-text text-darken-4">{{account.info.Account.Currency}}</i></span>
              </div>
              <div class="card-action activator">
                  <a class="waves-effect waves-light btn blue"><i class="material-icons left">account_balance_wallet</i>More</a>
                
              </div>
              <div class="card-reveal">
                <span class="card-title activator grey-text text-darken-4"><i class="material-icons right">close</i>Balance</span>
                  
                  <span class="card-title activator grey-text text-darken-4">{{account.balance}}</span>
              </div>

            </div>


          </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Dashboard",
  data() {
    return {
      accounts: [],
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
          amount: 250
        },
        {
          name: "Rainy day",
          amount: 25
        }
      ]
    };
  },

  mounted() {
    $(document).ready(function() {
      $(".collapsible").collapsible();
    });

    $(".datepicker").pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: "Today",
      clear: "Clear",
      close: "Ok",
      closeOnSelect: true // Close upon selecting a date,
    });
  },

  created() {
    this.getAccounts();
  },

  methods: {
    callback() {
      $(".carousel").carousel();
      console.log("callback");
    },
    getAccounts: function() {
      console.log("Test1");

      axios
        .get("/api/accounts#/")
        .then(response => {
          var count = 0;
          for (var x = 0; x < 10; x++) {
            

            const info = response.data.Data[x];
            this.getBalance(info.Account.AccountId, info,count);
            const balance = 0
            const item = {
              info,
              balance
            };
            this.accounts.push(item);
            count++;
          }
          setTimeout(function() {
            $(".carousel").carousel();
            $(".carousel").carousel('set', 0);
            document.getElementById("loader").style.display = "none";
            console.log("hide");
          }, 1000);

          // dispatch({
          //   JSON(response);
          //   data.accounts = Data;
          // }) //Change
        })
        .catch(err => {
          console.log(err);
        });
    },

    getBalance: function (accountid, info,count) {
      axios
        .get("/api/accounts/balances/" + accountid)
        .then(response => {
          const balance = response.data.Data[0].Balance.Amount.Amount;
          
          // dispatch({
          //   JSON(response);
          //   data.accounts = Data;
          // }) //Change
          console.log(balance);
          this.accounts[count].balance = balance;

        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
