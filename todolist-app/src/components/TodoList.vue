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

<script>
import TodoListItem from './TodoListItem.vue';

export default {
  name: 'TodoList',
  data() {
    return {};
  },
  methods: {},
  components: {
    TodoListItem,
  },
  props: ['todoList'],
};
</script>

<style scoped></style>
