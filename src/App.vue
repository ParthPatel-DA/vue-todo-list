<template>
  <div id="app">
    <form @submit.prevent="addTask">
      <input v-model.trim="todoText" />
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
    <div class="task-list">
      <h3>Task List</h3>
      <table>
        <tr
          is="task-card"
          v-for="(task, index) in todoData"
          :key="task.id"
          :task="task"
          :index="index"
          @edit="editTask"
          @delete="deleteTask"
        />
      </table>
    </div>
  </div>
</template>

<script>
import TaskCard from "./components/TaskCard.vue";

export default {
  name: "App",
  components: {
    TaskCard,
  },
  data: function () {
    return {
      todoText: "",
      todoData: [],
      currentIndex: 1,
      editIndex: -1,
    };
  },
  methods: {
    addTask: function () {
      if (this.todoText.length === 0) {
        alert("Please add task");
      } else {
        if (this.editIndex !== -1) {
          this.todoData[this.editIndex].text = this.todoText;
          this.editIndex = -1;
        } else {
          this.todoData.push({ text: this.todoText, id: this.currentIndex });
          this.currentIndex++;
        }
        this.todoText = "";
      }
    },
    editTask: function (index) {
      this.todoText = this.todoData[index].text;
      this.editIndex = index;
    },
    deleteTask: function (index) {
      this.todoData = this.todoData.filter((_, i) => index !== i);
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
