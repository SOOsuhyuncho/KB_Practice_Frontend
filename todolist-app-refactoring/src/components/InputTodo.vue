<template>
  <div class="input-group mb-3">
    <input
      class="form-control"
      @keyup="addHandler"
      type="text"
      v-model="todo"
      placeholder="할일을 여기에 입력!"
    />
    <button type="button" class="btn btn-primary" @click="addHandler">
      추가
    </button>
  </div>
</template>

<script>
export default {
  name: 'InputTodo',
  data() {
    return {
      todo: '',
    };
  },
  methods: {
    addHandler() {
      this.$emit('add-todo', this.todo);
    },
  },
};
</script>

<style scoped></style>
