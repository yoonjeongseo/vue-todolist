<template>
  <div id="root">
    <p>{{ originalPrice }}</p>
    <p>{{ doublePrice }}</p>
    <p>{{ tripplePrice }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['originalPrice', 'doublePrice', 'tripplePrice']),

    // originalPrice() {
    //   return this.$store.getters.originalPrice;
    // },
    // doublePrice() {
    //   return this.$store.getters.doublePrice;
    // },
    // tripplePrice() {
    //   return this.$store.getters.tripplePrice;
    // }
  }
}
</script>

<style>

</style>