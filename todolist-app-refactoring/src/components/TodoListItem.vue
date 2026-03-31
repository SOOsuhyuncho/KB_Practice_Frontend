<template>
  <li
    class="list-group-item d-flex justify-content-between align-items-center"
    :class="{ 'list-group-item-success': item.completed }"
  >
    <input
      class="form-check-input me-2"
      type="checkbox"
      :checked="item.completed"
      @change="toggleHandler"
    />
    <span
      :class="{ 'text-decoration-line-through text-muted': item.completed }"
      >{{ item.todo }}</span
    >
    <button class="btn btn-secondary" @click="deleteHandler">삭제</button>
  </li>
</template>

<script>
export default {
  name: 'TodoListItem',
  data() {
    return {};
  },
  props: ['item'],
  methods: {
    deleteHandler() {
      this.$emit('delete-todo', this.item.id);
    },
    toggleHandler() {
      this.$emit('toggle-todo', this.item.id);
    },
  },
};
</script>

<style scoped></style>
