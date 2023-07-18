<template>
  <form @submit.prevent="save" class="toy-edit">
    <h1>{{ toyToEdit._id ? "Edit" : "Add" }} Toy</h1>
    <input v-model="toyToEdit.name" type="text" placeholder="Enter toy name" />
    <input v-model="toyToEdit.price" type="number" />
    <hr />
    <RouterLink to="/toy">Cancel</RouterLink>

    <button>save</button>
  </form>
</template>
<script>
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js";
import { toyService } from "../services/toy.service.js";

export default {
  data() {
    return {
      toyToEdit: toyService.getEmptyToy(),
    };
  },
  created() {
    const { toyId } = this.$route.params;
    if (!toyId) return;
    this.toyToEdit = this.$store.getters.toy;
  },
  methods: {
    save() {
      this.$store
        .dispatch({ type: "addToy", toy: this.toyToEdit })
        .then(() => this.$router.push("/toy"))

        .catch(() => showErrorMsg("Cannot edit toy"));
    },
  },
};
</script>
