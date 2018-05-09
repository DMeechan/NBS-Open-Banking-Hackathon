<template>
  <div class="container">
    <div class="row" />
    <div class="row" />

    <!-- Header -->
    <div class="row valign-wrapper">
      <div class="col s3">
        <img class="responsive-img circle" src="http://archives.materializecss.com/0.100.2/images/yuna.jpg">
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
      <div class="col s8">

      </div>
    </div>

    <!-- Existing goals list -->
    <div class="row">
      <div class="col s4">

      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Goals",
    data() {
        return {
            header: "Good morning, Dave!",
            subheader: "Let's get you started on your financial goals.  ",
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
