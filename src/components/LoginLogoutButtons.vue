<template>
  <div>
    <button @click="login" v-if="!loggedIn">Login</button>
    <button @click="logout" v-if="loggedIn">Logout</button>
  </div>
</template>

<script>
import msalApp from '../msalService';

export default {
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    login() {
      msalApp.loginRedirect()
        .then((response) => {
          if (response.account) {
            this.loggedIn = true;
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    logout() {
      msalApp.logout();
      this.loggedIn = false;
    },
  },
};
 //Handle Promise
    msalApp.handleRedirectPromise().then((response) => {
    console.log(response)
    }).catch((error)=>{
    console.log(error)
    });
</script>