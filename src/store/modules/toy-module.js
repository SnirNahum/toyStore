import { toyService } from "../../services/toy.service.js";

export const toyStore = {
  strict: true,
  state() {
    return {
      toys: null,
      toy: null,
    };
  },
  mutations: {
    setToys(state, { toys }) {
      state.toys = toys;
    },
    getToyById(state, { toy }) {
      state.toy = toy;
    },
    addToy({ toys }, { savedToy }) {
      toys.push(savedToy);
    },
    removeToy({ toys }, { toyId }) {
      const idx = toys.findIndex((toy) => toy._id === toyId);
      toys.splice(idx, 1);
    },
  },

  getters: {
    toys({ toys }) {
      return toys;
    },
    toy({ toy }) {
      return toy;
    },
  },
  actions: {
    loadToys({ commit }, { filterBy }) {
      if (!filterBy)
        filterBy = {
          name: "",
          price: 0,
          inStock: false,
          labels: [],
          sortBy: "",
        };
      return toyService
        .query(filterBy)
        .then((toys) => commit({ type: "setToys", toys }));
    },
    getToyById({ commit }, { toyId }) {
      return toyService
        .getById(toyId)
        .then((toy) => commit({ type: "getToyById", toy }))
        .catch((err) => {
          console.log(err);
          return Promise.reject();
        });
    },
    addToy({ commit }, { toy }) {
      return toyService
        .save(toy)
        .then((savedToy) => commit({ type: "addToy", savedToy }))
        .catch((err) => {
          return Promise.reject();
        });
    },
    removeToy({ commit }, { toyId }) {
      return toyService
        .remove(toyId)
        .then(() => commit({ type: "removeToy", toyId }))
        .catch((err) => {
          return Promise.reject();
        });
    },
  },
};
