<template>
  <section>
    <h1>Toys</h1>
    <ToyFilter @setFilterBy="setFilterBy" />
    <routerLink :to="'/toy/edit/'">Add</routerLink>
    <ToyList :toys="toys" @remove="remove" />
  </section>
</template>

<script>
import ToyList from "../components/ToyList.vue";
import ToyFilter from "../components/ToyFilter.vue";
import { showSuccessMsg } from "../services/event-bus.service.js";

export default {
  components: {
    ToyList,
    ToyFilter,
  },
  data() {
    return {
      fitlerBy: {
        name: "",
      },
    };
  },
  created() {
    this.loadToys();
    // this.$store.dispatch({ type: "loadToys" });
  },
  computed: {
    toys() {
      return this.$store.getters.toys;
    },
  },
  methods: {
    remove(toyId) {
      this.$store
        .dispatch({ type: "removeToy", toyId })
        .then(() => showSuccessMsg("sadasd"));
    },
    setFilterBy(filterBy) {
      this.filterBy = { ...filterBy };
      this.loadToys();
    },
    loadToys() {
      this.$store.dispatch({ type: "loadToys", filterBy: this.filterBy });
    },
  },
};
</script>
