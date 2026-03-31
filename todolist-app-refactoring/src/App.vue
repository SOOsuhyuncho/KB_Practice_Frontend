<template>
  <div class="container mt-5" style="max-width: 800px">
    <div class="card shadow-sm">
      <div class="card-header text-center fs-4 fw-bold">TodoList App</div>
      <div class="card-body">
        <InputTodo @add-todo="addTodo"></InputTodo>
        <div class="row my-3 text-center">
          <div class="col">
            전체 todo 개수 : <strong>{{ totalCount }}</strong>
          </div>
          <div class="col text-success">
            완료 todo 개수 : <strong>{{ completedCount }}</strong>
          </div>
          <div class="col text-alert">
            미완료 todo 개수 : <strong> {{ incompletedCount }}</strong>
          </div>
        </div>
        <TodoList
          :todoList="todoList"
          @toggle-todo="toggleTodo"
          @delete-todo="deleteTodo"
        ></TodoList>
      </div>
    </div>
  </div>
</template>

<script setup>
import InputTodo from './components/InputTodo.vue';
import TodoList from './components/TodoList.vue';
import { ref, computed, watch } from 'vue';

const savedTodos = JSON.parse(
  localStorage.getItem('my-todos') || [
    { id: 1, todo: '자전거 타기', completed: false },
    { id: 2, todo: '딸과 공원 산책', completed: true },
    { id: 3, todo: '일요일 애견 카페', completed: false },
    { id: 4, todo: 'Vue 원고 집필', completed: false },
  ],
);

const todoList = ref(savedTodos);

watch(
  todoList,
  (newValue) => {
    localStorage.setItem('my-todos', JSON.stringify(newValue));
  },
  { deep: true },
);

const addTodo = (newTodoText) => {
  const newTodoId =
    todoList.value.length > 0
      ? todoList.value[todoList.value.length - 1].id + 1
      : 1;
  todoList.value.push({
    id: newTodoId,
    todo: newTodoText,
    completed: false,
  });
};

const deleteTodo = (targetId) => {
  const index = todoList.value.findIndex((item) => item.id === targetId);
  todoList.value.splice(index, 1);
};

const toggleTodo = (targetId) => {
  const index = todoList.value.findIndex((item) => item.id === targetId);
  todoList.value[index].completed = !todoList.value[index].completed;
};

const totalCount = computed(() => {
  return todoList.value.length;
});
const completedCount = computed(() => {
  return todoList.value.filter((item) => item.completed === true).length;
});
const incompletedCount = computed(() => {
  return todoList.value.filter((item) => item.completed === false).length;
});
</script>

<style scoped></style>
