<template>
  <div class="input-group mb-3">
    <input
      class="form-control"
      @keyup.enter="addHandler"
      type="text"
      v-model="todo"
      placeholder="할일을 여기에 입력!"
    />
    <button
      type="button"
      class="btn btn-custom btn-custom-add"
      @click="addHandler"
    >
      추가
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const todo = ref('');
const emit = defineEmits(['add-todo']);
const addHandler = () => {
  if (todo.value.trim() !== '') {
    emit('add-todo', todo.value);
    todo.value = '';
  }
};
</script>