<template>
  <tr>
    <td>
      <input
        type="checkbox"
        :checked="task.isCompleted"
        @change="complete(index)"
      />
    </td>
    <td>{{ task.text }}</td>
    <td><button @click="$emit('edit', index)">Edit</button></td>
    <td><button @click="deleteTask(index)">Delete</button></td>
  </tr>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TaskCard",
  props: {
    task: Object,
    index: Number,
  },
  computed: {
    ...mapGetters(["todoList", "isLoading"]),
  },
  methods: {
    complete: function (index) {
      const id = this.todoList[index].id;
      this.$store.commit("COMPLETE", { data: { id } });
    },
    deleteTask: function (index) {
      // this.todoList = this.todoList.filter((_, i) => index !== i);
      const id = this.todoList[index].id;
      this.$store.commit("DELETE", { data: { id } });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
