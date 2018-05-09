<template>
      <ul class="collapsible">
        <li class="active">
            <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
        <li>
            <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
        <li>
            <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
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