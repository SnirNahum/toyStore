<template>
  <div>
    <el-select
      v-model="labels"
      multiple
      collapse-tags
      collapse-tags-tooltip
      placeholder="Filter by label"
      style="width: 240px"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      labels: [],

      options: [
        {
          value: "All",
          label: "All",
        },
        {
          value: "Doll",
          label: "Doll",
        },
        {
          value: "Battery Powered",
          label: "Battery Powered",
        },
        {
          value: "Baby",
          label: "Baby",
        },
        {
          value: "Action",
          label: "Action",
        },
        {
          value: "Water Powered",
          label: "Water Powered",
        },
      ],
    };
  },
  watch: {
    labels: {
      handler() {
        this.$emit("filterByLabels", this.labels);
      },
      deep: true,
    },
  },
};
</script>
