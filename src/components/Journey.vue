<template>
    <div class="container">
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
        <ul class="collapsible">
            <li>
                <div class="collapsible-header grey lighten-5 active"><i class="material-icons">account_balance</i>Long term</div>
                <div class="collapsible-body" style="padding-bottom:50px">
                
                <div v-for="item in items">
                    <div class="row">
                        <div class="col s11">
                            <span >{{item.name}}
                                <div class="progress blue lighten-5" style="height:20px" >
                                    <div class="determinate blue lighten-2" v-bind:style="{width:item.percentage+'%'}"></div>
                                </div>
                            </span>
                        </div>
                        
                        <div class="col s1" style="padding-top:26px">
                                 <i class="material-icons grey lighten-3 circle blue-text">{{item.image}}</i>
                        </div>
                    </div>
                    </div>
                </div>

                <!-- <div class="collapsible-body" style="padding-bottom:50px">
                <span >Savings towards a car
                    <div class="progress" style="height:20px" >
                        <div class="determinate" style="width: 50%"></div>
                    <img class="right" height="20px" src="http://clipartoons.com/wp-content/uploads/2016/03/toy-car-clipart-black-and-white-car-clip-art-1.png">
                    </div>
                </span>
                </div>
                <div class="collapsible-body" style="padding-bottom:50px">
                <span >Savings towards a holiday
                    <div class="progress" style="height:20px" >
                        <div class="determinate" style="width: 70%"></div>
                    <img class="right" height="20px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHMpRXqq8NhODpvJXNkmHrElnwyO1EYvY0VklGJ_hKyTHbou_Q">
                    </div>
                </span>
                </div> -->

            </li>
            <li>
                <div class="collapsible-header grey lighten-5"><i class="material-icons">attach_money</i>Savings</div>
                <div class="collapsible-body">
                    <div v-for="item in savings">
                        <div class="row">
                            <div class="col s11">
                                <span >{{item.name}}
                                    <div class="progress blue lighten-5" style="height:20px" >
                                        <div class="determinate blue lighten-2" v-bind:style="{width:item.percentage+'%'}"></div>
                                    </div>
                                </span>
                            </div>
                            
                            <div class="col s1" style="padding-top:26px">
                                 <i class="material-icons  grey lighten-3 circle blue-text">{{item.image}}</i>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="collapsible-header grey lighten-5"><i class="material-icons">account_balance_wallet</i>Daily expense</div>
                <div class="collapsible-body">
                    <div v-for="item in daily">
                        <div class="row">
                            <div class="col s11">
                                <span >{{item.name}}
                                    <div class="progress blue lighten-5" style="height:20px" >
                                        <div class="determinate blue lighten-2" v-bind:style="{width:item.percentage+'%'}"></div>
                                    </div>
                                </span>
                            </div>
                            
                            <div class="col s1" style="padding-top:26px">
                                 <i class="material-icons grey lighten-3 circle blue-text">{{item.image}}</i>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "Journey",
  data() {
    return {
      items: [
        {
          name:"Saving for your first house",
          image:"home",
          percentage: "0"
        },
        {
          name:"Saving for your car",
          image:"directions_car",
          percentage: "0"
        },
        {
          name:"Saving for a holiday",
          image:
            "beach_access",
          percentage: "0"
        }
      ],
      savings: [
        {
          name:"Long term savings",
          image:
            "attach_money",
          percentage: "15"
        }
      ],
      daily: [
        {
          name:"food",
          image:
            "restaurant",
          percentage: "73"
        },
        {
          name:"travel",
          image:
            "airplanemode_active",
          percentage: "12"
        }
      ],
      header: "Hey Alice!",
      subheader: "Let's see how the savings are going!",

      message: "Welcome to your NBS journey!"
    };
  },

  mounted() {
    console.log(this);
    const self = this;

    const numbers = [30, 83, 45];


    setTimeout(function() {
      for (let x = 0; x < 3; x++) {
        self.items[x].percentage = String(numbers[x]);
      }
    }, 400);
    $(document).ready(function() {
      $(".collapsible").collapsible();
      $(".carousel.carousel-slider").carousel({ fullWidth: true });
    });
  }
};
</script>

<style scoped>

</style>