import { createStore } from "vuex";
import { toyStore } from "./modules/toy-module.js";
import { userStore } from "./modules/user-module.js";

// Enable strict mode in development

// Create a store instance
export const store = createStore({
  modules: {
    toyStore,
    userStore,
  },
});
