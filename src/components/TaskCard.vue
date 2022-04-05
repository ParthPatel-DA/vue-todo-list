<template>
  <tr>
    <td>{{ task.text }}</td>
    <td><button @click="$emit('edit', index)">Edit</button></td>
    <td><button @click="$emit('delete', index)">Delete</button></td>
  </tr>
</template>

<script>
export default {
  name: "TaskCard",
  props: {
    task: Object,
    index: Number,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
