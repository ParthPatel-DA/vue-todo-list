<template>
  <span>
    <tr
      is="task-card"
      v-for="(task, index) in todoList"
      :key="task.id"
      :task="task"
      :index="index"
      @edit="editTask"
      @delete="deleteTask"
    />
  </span>
</template>

<script>
import { mapGetters } from "vuex";
import TaskCard from "../components/TaskCard.vue";

export default {
  name: "task-list",
  components: {
    TaskCard,
  },
  props: {
    deleteTask: Function,
    editTask: Function,
  },
  computed: {
    ...mapGetters(["todoList"]),
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
