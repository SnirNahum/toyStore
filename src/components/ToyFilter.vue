<template>
  <section class="toy-filter">
    <label for="inStockfilterBy">In Stock:</label>
    <input
      id="inStockfilterBy"
      @click="setFilterBy"
      type="checkbox"
      v-model="filterBy.inStock"
    />
    <ToyFilterByName @filterByName="setFilterByName" />
    <ToyFilterByPrice @filterByPrice="setFilterByPrice" />
    <ToyFilterByLabel @filterByLabels="setFilterByLabels" />
    <ToyOrderBy @orderBy="setOrderBy" />
  </section>
</template>

<script>
import { utilService } from "../services/util.service.js";
import ToyFilterByLabel from "./filterBy/ToyFilterByLabel.vue";
import ToyOrderBy from "./filterBy/ToyOrderBy.vue";
import ToyFilterByName from "./filterBy/ToyFilterByName.vue";
import ToyFilterByPrice from "./filterBy/ToyFilterByPrice.vue";

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
    };
  },

  methods: {
    setFilterBy: utilService.debounce(function () {
      if (this.filterBy.labels.includes("All")) this.filterBy.labels = [];
      this.$emit("setFilterBy", this.filterBy);
    }, 700),
    setFilterByLabels(labels) {
      this.filterBy.labels = labels;
      this.setFilterBy();
    },
    setOrderBy(value) {
      this.filterBy.sortBy = value;
      this.setFilterBy();
    },
    setFilterByName(value) {
      this.filterBy.name = value;
      this.setFilterBy();
    },
    setFilterByPrice(value) {
      this.filterBy.price = value;
      this.setFilterBy();
    },
  },
  components: {
    ToyFilterByLabel,
    ToyOrderBy,
    ToyFilterByName,
    ToyFilterByPrice,
  },
};
</script>
