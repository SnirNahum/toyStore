<template>
  <section class="toy-filter">
    <input
      @input="setFilterBy"
      type="text"
      v-model="filterBy.name"
      placeholder="Filter by toy name"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        name: "",
      },
    };
  },
  methods: {
    setFilterBy() {
      this.$emit("setFilterBy", this.filterBy);
    },
  },
};
</script>
