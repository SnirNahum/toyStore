<template>
  <section class="toys-list">
    <article
      @click.stop="onSelectedToy(toy._id)"
      class="toy-item"
      v-for="toy in toys"
      :key="toy._id"
    >
      <toyPreview :toy="toy" />
      <button @click.stop="onRemove(toy._id)">X</button>
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
      this.$router.push("/toy/" + toyId);
    },
    onRemove(toyId) {
      this.$emit("remove", toyId);
    },
  },

  components: {
    ToyPreview,
  },
};
</script>
