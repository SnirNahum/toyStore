<template>
  <section class="toys-preview">
    <h2>{{ toy.name }}</h2>
    <!-- <img src="" alt=""> -->
    <h3>{{ toy.price }}</h3>
    <h3>{{ toy.inStock }}</h3>
    <div>
      <p v-for="labels in toy.labels">{{ labels.title }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    toy: {
      type: [Object, null],
      required: true,
    },
  },
};
</script>
