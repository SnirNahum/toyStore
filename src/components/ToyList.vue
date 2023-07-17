<template>
  <section class="toys-list">
    <article
      @click="onSelectedToy(toy._id)"
      class="toy-item"
      v-for="toy in toys"
      :key="toy._id"
    >
      <toyPreview :toy="toy"></toyPreview>
    </article>
  </section>
</template>

<script>
import ToyPreview from "./ToyPreview.vue";
export default {
  props: {
    toys: {
      type: [Array, null],
      required: true,
    },
  },
  methods: {
    onSelectedToy(toyId) {
      console.log(toyId);
    },
  },
  components: {
    ToyPreview,
  },
};
</script>
