<template>
  <ul class="list-group">
    <TodoListItem
      v-for="item in todoList"
      :key="item.id"
      :item="item"
      @delete-todo="(id) => $emit('delete-todo', id)"
      @toggle-todo="(id) => $emit('toggle-todo', id)"
    ></TodoListItem>
  </ul>
</template>

<script setup>
import TodoListItem from './TodoListItem.vue';



defineEmits(['toggle-todo', 'delete-todo']);  
defineProps(['todoList']);
</script>

<style scoped></style>
