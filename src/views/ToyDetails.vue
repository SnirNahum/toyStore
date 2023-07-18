<template>
  <section v-if="toy">
    <h1>{{ toy.name }}</h1>
    <h2>{{ toy.price }}</h2>
    <h2>{{ toy.inStock }}</h2>
    <RouterLink @click.stop :to="'/toy/edit/' + toy._id">Edit</RouterLink>
  </section>
  <div v-else>Loading...</div>
</template>

<script>
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js";

export default {
  computed: {
    toy() {
      return this.$store.getters.toy;
    },
  },
  created() {
    this.loadToy();
  },
  methods: {
    loadToy() {
      const { toyId } = this.$route.params;
      this.$store.dispatch({ type: "getToyById", toyId }).catch((err) => {
        showErrorMsg("Cannot load toy");
      });
    },
  },
};
</script>
