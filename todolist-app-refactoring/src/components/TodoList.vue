<template>
  <TransitionGroup name="list" tag="ul" class="list-group">
    <TodoListItem
      v-for="item in todoList"
      :key="item.id"
      :item="item"
      @delete-todo="(id) => $emit('delete-todo', id)"
      @toggle-todo="(id) => $emit('toggle-todo', id)"
      @update-todo="(id, newText) => $emit('update-todo', id, newText)"
    ></TodoListItem>
  </TransitionGroup>
</template>

<script setup>
import TodoListItem from './TodoListItem.vue';

defineEmits(['toggle-todo', 'delete-todo', 'update-todo']);
defineProps(['todoList']);
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
