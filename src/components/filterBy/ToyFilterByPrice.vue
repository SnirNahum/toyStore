<template>
  <input type="number" placeholder="Filter by toy price" v-model="value" />
</template>

<script>
export default {
  data() {
    return {
      value: 0,
    };
  },
  watch: {
    value: {
      handler() {
        this.$emit("filterByPrice", this.value);
      },
    },
  },
};
</script>
