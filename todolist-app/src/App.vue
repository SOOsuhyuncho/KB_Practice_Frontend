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

<script>
import InputTodo from './components/InputTodo.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  data() {
    return {
      todoList: [
        { id: 1, todo: '자전거 타기', completed: false },
        { id: 2, todo: '딸과 공원 산책', completed: true },
        { id: 3, todo: '일요일 애견 카페', completed: false },
        { id: 4, todo: 'Vue 원고 집필', completed: false },
      ],
    };
  },
  methods: {
    addTodo(newTodoText) {
      const newTodoId = this.todoList[this.todoList.length - 1].id + 1;
      this.todoList.push({
        id: newTodoId,
        todo: newTodoText,
        completed: false,
      });
    },
    deleteTodo(targetId) {
      const index = this.todoList.findIndex((item) => item.id === targetId);
      this.todoList.splice(index, 1);
    },
    toggleTodo(targetId) {
      const index = this.todoList.findIndex((item) => item.id === targetId);
      this.todoList[index].completed = !this.todoList[index].completed;
    },
  },
  components: {
    TodoList,
    InputTodo,
  },

  computed: {
    totalCount() {
      return this.todoList.length;
    },
    completedCount() {
      return this.todoList.filter((item) => item.completed === true).length;
    },
    incompletedCount() {
      return this.todoList.filter((item) => item.completed === false).length;
    },
  },
};
</script>

<style scoped></style>
