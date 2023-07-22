<template>
  <header class="app-header">
    <nav class="nav-list">
      <router-link to="/">Home</router-link> |
      <router-link to="/toy">Toys</router-link> |
      <router-link to="/about">About</router-link>
      <router-link v-if="loggedInUser" to="/userProfile">
        | User Profile</router-link
      >
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser;
    },
  },
};
</script>
