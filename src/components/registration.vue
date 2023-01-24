<script>
// Initialize Userfront
Userfront.init("demo1234");

export default {
  data() {
    return {
      email: "",
      accountName: "",
      password: "",
      passwordVerify: "",
      alert: "",
    };
  },
  methods: {
    // Sign up with the form's email and password
    signupWithPassword() {
      // Reset the alert to empty
      this.alert = "";
      // Verify that the passwords match
      if (this.password !== this.passwordVerify) {
        this.alert = "Passwords must match";
        return;
      }
      // Call Userfront.signup()
      Userfront.signup({
        method: "password",
        email: this.email,
        password: this.password,
        data: {
          accountName: this.accountName,
        },
      }).catch((error) => {
        this.alert = error.message;
      });
    },
    // Sign up with SSO (google)
    signupWithSSO() {
      Userfront.signup({ method: "google" });
    },
  },
};
</script>

<template>
    <!-- <div id="app">
      <div id="alert" v-if="alert">{{ alert }}</div>
  
      <form @submit.prevent="signupWithPassword">
        <label>
          Email address
          <input type="email" v-model="email" />
        </label>
        <label>
          Account name (custom field)
          <input type="text" v-model="accountName" />
        </label>
        <label>
          Password
          <input type="password" v-model="password" />
        </label>
        <label>
          Verify password
          <input type="password" v-model="passwordVerify" />
        </label>
        <button type="submit">Sign up</button>
      </form>
  
      <p>or</p>
  
      <button @click.prevent="signupWithSSO">Sign up with Google</button>
    </div> -->
    <h1>Hello</h1>
  </template>
  

  
  <style scoped>
    button,
    input {
      display: block;
      margin-bottom: 10px;
    }
  
    #alert {
      color: red;
      margin-bottom: 10px;
    }
  </style>