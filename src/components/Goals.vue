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
    <div class="row">
      <div class="col s12 m9">
        <h5>Add New Goals</h5>
        <ul class="collapsible" data-collapsible="accordion" style="margin-top: 29px;">
          <li v-for="item in add">
            <div class="grey lighten-5 collapsible-header"><i class="material-icons">{{ item.icon }}</i>{{ item.name }}</div>
            <div class="collapsible-body" style="padding-bottom:0px">
              <div class="row">
                <div class="col s12">
                  I want to save a total of £
                  <div class="input-field inline">
                    <input id="amount" type="number" class="validate" :value="item.amount">
                    <label for="amount" data-error="please enter a number" data-success=""></label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col s12">
                  I want to have this saved by
                  <div class="input-field inline">
                    <input id="target-date" type="text" class="datepicker" :value="item.date">
                    <label for="target-date"></label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col s12">
                  <p style="font-size:18px;margin-bottom:0px">To reach this goal, you'll need to save:</p>
                  <br />
                  <h5 class="center">
                    <div class="divider" style="margin-bottom:20px;margin-top:0px"></div>
                    <span class="blue-text text-darken-3" > £{{ item.monthlySaving }} per month</span>
                    <span :id="item.name" class="waves-effect waves-light btn blue darken-1" style="margin-top:10px;padding-bottom:45px" @click="addGoal">
                      <i class="material-icons white-text " >add</i>
                      Add Goal
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- Existing goals list -->
      <div class="col s12 m3">
        <h5>Your Goals</h5>
         <table>
        <thead>
          <tr>
              <th>Name</th>
              <th>Monthly Saving</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in goals">
            <td>{{item.name}}</td>
            <td>£{{item.amount}}</td>
          </tr>
        </tbody>
      </table>
      <router-link to="/journey" class="col s12 blue waves-effect waves-light btn"><i class="material-icons left">card_travel</i>VIEW JOURNEY</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Goals",
    data() {
        return {
            header: "Good morning, Alice!",
            subheader: "Let's get you started on your financial goals.  ",
            add: [
                {
                    name: "Go on holiday",
                    icon: "beach_access",
                    amount: 250,
                    date: "9 December 2018",
                    monthlySaving: 36,
                },
                {
                    name: "Plan for new car",
                    icon: "directions_car",
                    amount: 50000,
                    date: "9 May 2038",
                    monthlySaving: 208,
                },
                {
                    name: "First home",
                    icon: "home",
                    amount: 250000,
                    date: "9 May 2048",
                    monthlySaving: 69,
                },
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
            ],
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
            closeOnSelect: true, // Close upon selecting a date,
        });
    },

    methods: {
        calculateMonthlySaving: index => {
            const item = this.add[index];

            const today = new Date();
            const date = new Date(item.date);
            console.log("date: ", date);
            const months = this.diffMonths(today, date);
        },

        diffMonths: (dt1, dt2) => {
            let diff = (dt2.getTime() - dt1.getTime()) / 1000;
            diff /= 60 * 60 * 24 * 7 * 4;
            return Math.abs(Math.round(diff));
        },

        addGoal: function(event) {
          const id = event.target.id;
          const item = this.add.find(arrayItem => arrayItem.name === id);
          console.log(item);

          const goalItem = {
            name: item.name,
            amount: item.monthlySaving
          }

          this.goals.push(goalItem);

          this.add = this.add.filter(element => {
            return element.name !== id;
          });

        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
