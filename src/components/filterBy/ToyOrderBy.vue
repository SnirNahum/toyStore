<template>
  <el-select v-model="value" clearable placeholder="Sort by">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script lang="ts">
export default {
  data() {
    return {
      value: "",
      options: [
        {
          value: "Order by",
          label: "",
        },
        {
          value: "name",
          label: "Name",
        },
        {
          value: "price",
          label: "Price",
        },
        {
          value: "createdAt",
          label: "Newest",
        },
      ],
    };
  },
  watch: {
    value: {
      handler() {
        this.$emit("orderBy", this.value);
      },
    },
  },
};
</script>
