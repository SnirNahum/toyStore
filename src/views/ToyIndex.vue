<template>
  <section>
    <h1>Toys</h1>
    <ToyList :toys="toys" />
  </section>
</template>

<script>
import ToyList from "../components/ToyList.vue";
export default {
  components: {
    ToyList,
  },

  created() {
    this.$store.dispatch({ type: "loadToys" });
  },
  computed: {
    toys() {
      return this.$store.getters.toys;
    },
  },
};
</script>
