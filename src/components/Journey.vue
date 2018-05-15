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
                <div class="collapsible-header active"><i class="material-icons">account_balance</i>Long term</div>
                <div class="collapsible-body" style="padding-bottom:40px">
                
                <span >Savings towards a house
                    <img class="right" height="20px" src="http://www.processcodi.com/wp-content/uploads/2017/10/easy-house-drawing-house-line-drawing-8-easy-home-design-app.jpg">
                </span>
                </div>
                <div class="collapsible-body" style="padding-bottom:50px">
                <span >Savings towards a car
                    <img class="right" height="20px" src="http://clipartoons.com/wp-content/uploads/2016/03/toy-car-clipart-black-and-white-car-clip-art-1.png">
                </span>
                </div>
                <div class="collapsible-body" style="padding-bottom:50px">
                <span >Savings towards a holiday
                    <img class="right" height="20px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHMpRXqq8NhODpvJXNkmHrElnwyO1EYvY0VklGJ_hKyTHbou_Q">
                </span>
                </div>

            </li>
            <li>
                <div class="collapsible-header"><i class="material-icons">attach_money</i>Savings</div>
                <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
            </li>
            <li>
                <div class="collapsible-header"><i class="material-icons">account_balance_wallet</i>Daily expense</div>
                <div class="collapsible-body">
                    <div class="carousel carousel-slider center" data-indicators="true">
                        <div class="carousel-fixed-item center">
                            <a class="btn waves-effect white grey-text darken-text-2">button</a>
                        </div>
                        <div class="carousel-item red white-text" href="#one!">
                            <h2>First Panel</h2>
                            <p class="white-text">This is your first panel</p>
                        </div>
                        <div class="carousel-item amber white-text" href="#two!">
                            <h2>Second Panel</h2>
                            <p class="white-text">This is your second panel</p>
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
            header: "Hey Alice!",
            subheader: "Let's see how the savings are going!",
       
            message: "Welcome to your NBS journey!",
        };
    },

    mounted() {
        $(document).ready(function(){
        $('.collapsible').collapsible();
        $('.carousel.carousel-slider').carousel({fullWidth: true});
  });
    }

};

  
    
 
</script>

<style scoped>

</style>