<template>
  <input type="text" placeholder="Filter by toy name" v-model="value" />
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  watch: {
    value: {
      handler() {
        this.$emit("filterByName", this.value);
      },
    },
  },
};
</script>
