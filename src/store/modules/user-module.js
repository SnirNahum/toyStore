// import { toyService } from "../../services/toy.service.js";

import { userService } from "../../services/user.service.js";

export const userStore = {
  strict: true,
  state() {
    return {
      loggedInUser: null,
    };
  },
  mutations: {
    login(state, { loggedUser }) {
      state.loggedInUser = loggedUser;
    },
    signup(state, { signedUpUser }) {
      state.loggedInUser = signedUpUser;
    },
    logout(state, { signedUpUser }) {
      state.loggedInUser = signedUpUser;
    },
  },

  getters: {
    loggedInUser({ loggedInUser }) {
      return loggedInUser;
    },
  },
  actions: {
    login({ commit }, { loginCredentials }) {
      return userService
        .login(loginCredentials)
        .then((loggedUser) => {
          commit({ type: "login", loggedUser });
        })
        .catch((err) => {
          return Promise.reject();
        });
    },
    signUp({ commit }, { signUpCredentials }) {
      return userService
        .signup(signUpCredentials)
        .then((signedUpUser) => {
          commit({ type: "signup", signedUpUser });
        })
        .catch((err) => {
          return Promise.reject();
        });
    },
    logout({ commit }) {
      userService.logout().then(() => {
        commit({ type: "logout" });
      });
    },
  },
};

// addToy({ commit }, { toy }) {
//   return toyService
//     .save(toy)
//     .then((savedToy) => commit({ type: "addToy", savedToy }))
//     .catch((err) => {
//       return Promise.reject();
//     });
// },
