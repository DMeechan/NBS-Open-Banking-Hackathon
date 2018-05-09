<template>
      <ul class="collapsible">
        <li>
            <div class="collapsible-header active"><i class="material-icons">account_balance</i>Long term</div>
            <div class="collapsible-body" style="padding-bottom:50px">
            
            <span >Savings towards a house
                 <img class="right" height="30px" src="http://www.processcodi.com/wp-content/uploads/2017/10/easy-house-drawing-house-line-drawing-8-easy-home-design-app.jpg">
            </span>
            </div>
            <div class="collapsible-body" style="padding-bottom:50px">
            <span >Savings towards a car
                 <img class="right" height="30px" src="http://clipartoons.com/wp-content/uploads/2016/03/toy-car-clipart-black-and-white-car-clip-art-1.png">
            </span>
            </div>
            <div class="collapsible-body" style="padding-bottom:50px">
            <span >Savings towards a holiday
                 <img class="right" height="30px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHMpRXqq8NhODpvJXNkmHrElnwyO1EYvY0VklGJ_hKyTHbou_Q">
            </span>
            </div>

        </li>
        <li>
            <div class="collapsible-header"><i class="material-icons">attach_money</i>Savings</div>
            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
        <li>
            <div class="collapsible-header"><i class="material-icons">account_balance_wallet</i>Daily expense</div>
            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
  </ul>
        
</template>

<script>
export default {
    name: "Journey",
    data() {
        return {
            message: "Welcome to your NBS journey!",
        };
    },
};

  $(document).ready(function(){
    $('.collapsible').collapsible();

  });
    
 
</script>

<style scoped>

</style>