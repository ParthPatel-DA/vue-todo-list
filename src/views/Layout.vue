<template>
  <div id="app">
    <form @submit.prevent="addTask">
      <input :value="todoText" @change="todoText = $event.target.value" />
      <button type="submit" style="margin-left: 10px">
        {{ editIndex === -1 ? "Add" : "Edit" }} Task
      </button>
      <button
        type="reset"
        v-show="editIndex !== -1"
        style="margin-left: 10px"
        @click="editIndex = -1"
      >
        Keep old
      </button>
    </form>
    <hr />
    <router-link to="/" style="margin-right: 10px">All</router-link>|
    <router-link to="/completed" style="margin-left: 10px">
      Completed
    </router-link>
    <hr />
    <div class="task-list">
      <h3>Task List</h3>
      <table>
        <tr v-if="isLoading === true">
          <td colspan="3">Loading...</td>
        </tr>
        <router-view
          v-else
          :editTask="editTask"
          :deleteTask="deleteTask"
        ></router-view>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_TODO } from "../store/types/action";
import { ADD, DELETE, EDIT } from "../store/types/mutation";

export default {
  name: "app-layout",
  data: function () {
    return {
      todoText: "",
      // todoData: [],
      // currentIndex: 1,
      editIndex: -1,
    };
  },
  mounted() {
    // console.log(this.$store);
    this.$store.dispatch(FETCH_TODO);
  },
  computed: {
    ...mapGetters(["todoList", "isLoading"]),
  },
  methods: {
    addTask: function () {
      if (this.todoText.length === 0) {
        alert("Please add task");
      } else {
        if (this.editIndex !== -1) {
          // this.todoList[this.editIndex].text = this.todoText;
          this.$store.commit(EDIT, {
            text: this.todoText,
            editIndex: this.editIndex,
          });
          this.editIndex = -1;
        } else {
          this.$store.commit(ADD, { data: { text: this.todoText } });
          // this.todoList.push({ text: this.todoText, id: this.currentIndex });
          // this.currentIndex++;
        }
        this.todoText = "";
      }
    },
    editTask: function (index) {
      this.todoText = this.todoList[index].text;
      this.editIndex = index;
    },
    deleteTask: function (index) {
      // this.todoList = this.todoList.filter((_, i) => index !== i);
      this.$store.commit(DELETE, { data: { index } });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
