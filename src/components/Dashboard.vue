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
     

        <div id="stag-list" style="visibility:hidden" class="center"> 
       
          <div class="list-item" style="width:100%" v-for="account in accounts" >
              
             <div class="center card grey lighten-3" style="width:100%">
              <div class="card-content activator"  style="padding-top:10px;padding-bottom:5px">
                <i class="material-icons  left">account_balance</i><span class="card-title activator bold-text grey-text text-darken-4">{{account.info.Account.Account.SecondaryIdentification}}</span>
                <i class="material-icons  left">contacts</i><span class="card-title activator grey-text text-darken-4">{{account.info.Account.Nickname}}</span>
                <i class="material-icons  left">account_balance_wallet</i><span class="card-title activator grey-text text-darken-4">{{account.info.Account.Currency}}</span>
              </div>
              <!-- <div class="card-action activator"> -->
                <!-- <div class="divider">
              </div>
              <a class="card-action waves-effect waves-light btn blue activator" style="padding:0px;padding-left:8px;padding-right:8px;margin-bottom:10px;margin-top:10px"><i class="material-icons left">account_balance_wallet</i>More</a>
                 -->
              <div class="card-reveal">
                <span class="card-title center-align grey-text text-darken-4" style="padding-left:25px;padding-bottom:6px"><i class="material-icons right">close</i>Balance</span>
                  <div class="divider"></div>
                  <span class="card-title grey-text text-darken-4" style="padding-top:6px">£{{account.balance}}</span>
              </div>

            </div>


          </div>
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
        .get("https://localhost:8001/api/accounts/")
        .then(response => {
          var count = 0;
          const thistemp = this;
          const tempaccounts=[];
          for (var x = 0; x < 10; x++) {
            const info = response.data.Data[x];
            this.getBalance(info.Account.AccountId, info, count);
            const balance = 0;
            const item = {
              info,
              balance
            };
            tempaccounts.push(item);
            count++;
          }
          setTimeout(function() {
            document.getElementById("loader").style.display = "none";

            document.getElementById("stag-list").style.visibility = "visible";
            console.log("hide");
            
            tempaccounts.forEach(element => {
              console.log(element);
              thistemp.accounts.push(element);
            });
          }, 400);

          // dispatch({
          //   JSON(response);
          //   data.accounts = Data;
          // }) //Change
        })
        .catch(err => {
          console.log(err);
        });
    },
    getBalance: function(accountid, info, count) {
      axios
        .get("https://localhost:8001/api/accounts/balances/" + accountid)
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
