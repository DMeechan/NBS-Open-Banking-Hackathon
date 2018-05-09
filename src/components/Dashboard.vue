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
    <div class="row">
      <div class="col s12 m9">
        <ul class="collapsible" data-collapsible="expandable" style="margin-top: 29px;">
          <li v-for="account in accounts">@{{ accounts }}</li>
            
        </ul>
      </div>

      <!-- Existing goals list -->
      
    </div>
  </div>
</template>

<script>
export default {
    name: "Goals",
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
      $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      closeOnSelect: true // Close upon selecting a date,
    });
  },
  beforeMount(){
    this.fetchStats()
 },

  methods: {

    fetchStats: function()
    {
        http.get('https://ob-api.innovationwide.co.uk/api/accounts').then(function(response){users = response.data;
         }, function(error){
            console.log(error.statusText);
        });

   
    },

    calculateMonthlySaving: (index) => {
      const item = this.add[index];

      const today = new Date();
      const date = new Date(item.date);
      console.log('date: ', date);
      const months = this.diffMonths(today, date);

    },

    diffMonths: (dt1, dt2) => {
      let diff =(dt2.getTime() - dt1.getTime()) / 1000;
      diff /= (60 * 60 * 24 * 7 * 4);
      return Math.abs(Math.round(diff));
    }
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
