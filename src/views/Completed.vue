<template>
  <tbody>
    <tr
      is="task-card"
      v-for="(task, index) in isCompleted"
      :key="task.id"
      :task="task"
      :index="index"
      @edit="editTask"
    />
    <tr v-if="isCompleted.length === 0">
      <td colspan="3">No Task</td>
    </tr>
  </tbody>
</template>

<script>
import { mapGetters } from "vuex";
import TaskCard from "../components/TaskCard.vue";

export default {
  name: "completed-task-list",
  components: {
    TaskCard,
  },
  props: {
    editTask: Function,
  },
  computed: {
    ...mapGetters(["isCompleted"]),
  },
};
</script>

<style>
</style>
