<template>
  <div class="homePage-container">
    <h1>Welcome to the Toy store</h1>

    <form v-if="!isSignedUp">
      <div>Login</div>
      <input
        type="text"
        placeholder="username"
        v-model="loginCredentials.username"
      />
      <input
        type="text"
        placeholder="password"
        v-model="loginCredentials.password"
      />
      <button @click.prevent="login">Send</button>
      <p>Dont have an account? <span @click="signUpLogin">Sign up</span></p>
    </form>
    <form v-else>
      <div>Sign Up</div>
      <input
        type="text"
        placeholder="username"
        v-model="signUpCredentials.username"
      />
      <input
        type="text"
        placeholder="password"
        v-model="signUpCredentials.password"
      />
      <input
        type="text"
        placeholder="Enter full name"
        v-model="signUpCredentials.fullname"
      />
      <button @click.prevent="SignUp">Send</button>
      <p>Already have an account? <span @click="signUpLogin">Login</span></p>
    </form>
  </div>
</template>

<script>
import { showSuccessMsg } from "../services/event-bus.service.js";

export default {
  data() {
    return {
      isSignedUp: false,
      loginCredentials: {
        username: "",
        password: "",
      },
      signUpCredentials: {
        username: "",
        password: "",
        fullname: "",
        isAdmin: false,
      },
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch({
          type: "login",
          loginCredentials: this.loginCredentials,
        })
        .then(console.log("user loggedIn ", this.loginCredentials));
      this.$router.push("/toy");
    },
    SignUp() {
      this.$store
        .dispatch({
          type: "signUp",
          signUpCredentials: this.signUpCredentials,
        })
        .then(console.log("user signedUp ", this.signUpCredentials));
      this.$router.push("/toy");
    },
    signUpLogin() {
      console.log("a");
      return (this.isSignedUp = !this.isSignedUp);
    },
  },
};
</script>
