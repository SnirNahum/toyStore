<template>
  <section class="toy-filter">
    <input
      @input="setFilterBy"
      type="text"
      v-model="filterBy.name"
      placeholder="Filter by toy name"
    />
    <input
      @input="setFilterBy"
      type="number"
      v-model="filterBy.price"
      placeholder="Filter by toy price"
    />
    <label for="inStockfilterBy">In Stock:</label>
    <input
      id="inStockfilterBy"
      @click="setFilterBy"
      type="checkbox"
      v-model="filterBy.inStock"
    />

    <legend>Filter by labels</legend>
    <select v-model="filterBy.labels" @change="setFilterBy" multiple>
      <option
        v-for="labelOption in labelOptions"
        :key="labelOption"
        :value="labelOption"
      >
        {{ labelOption }}
      </option>
    </select>

    <legend>Sort By</legend>
    <select v-model="filterBy.sortBy" @change="setFilterBy">
      <option value="">select</option>
      <option value="name">Name</option>
      <option value="price">Price</option>
      <option value="createdAt">Newest</option>
    </select>
  </section>
</template>

<script>
import { utilService } from "../services/util.service.js";

export default {
  data() {
    return {
      filterBy: {
        name: "",
        price: 0,
        inStock: false,
        labels: [],
        sortBy: "",
        isDescending: 1,
      },
      labelOptions: [
        "All",
        "Doll",
        "Battery Powered",
        "Baby",
        "Action",
        "Water Powered",
      ],
    };
  },

  methods: {
    setFilterBy: utilService.debounce(function () {
      if (this.filterBy.labels.includes("All")) this.filterBy.labels = [];
      this.$emit("setFilterBy", this.filterBy);
    }, 700),
  },
};
</script>

<style scoped>
.toy-filter {
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
</style>
