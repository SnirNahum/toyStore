<template>
  <div>
    <AppHeader />
    <RouterView />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>
