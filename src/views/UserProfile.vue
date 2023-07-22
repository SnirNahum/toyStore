<template>
  <div>
    <h1>Hey {{ loggedInUser.fullname }}</h1>
    <p>username: {{ loggedInUser.username }}</p>
  </div>
  <button @click="logout">logout</button>
</template>

<script>
export default {
  data() {
    return {
      loggedInUser: null,
    };
  },
  created() {
    this.loggedInUser = this.$store.getters.loggedInUser;
  },
  methods: {
    logout() {
      this.$store
        .dispatch({ type: "logout" })
        .then("logout done")
        .then(() => {
          console.log("user logged out");
          this.$router.push("/");
        });
    },
  },
};
</script>
