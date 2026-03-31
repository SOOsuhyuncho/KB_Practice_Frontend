<template>
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <li v-for="todoItem in todoList" :key="todoItem.id">
          {{ todoItem.todo }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: { todoList: { type: Array, required: true } },
};
</script>

<style></style>