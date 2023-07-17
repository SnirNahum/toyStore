import { toyService } from "../../services/toy.service.local.js";

export const toyStore = {
  strict: true,
  state() {
    return {
      toys: null,
    };
  },
  mutations: {
    setToys(state, { toys }) {
      state.toys = toys;
    },
  },
  getters: {
    toys({ toys }) {
      return toys;
    },
  },
  actions: {
    loadToys({ commit }) {
      return toyService
        .query()
        .then((toys) => commit({ type: "setToys", toys }));
    },
  },
};
