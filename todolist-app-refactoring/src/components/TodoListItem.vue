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

<script setup>
const props = defineProps(['item']);
const emit = defineEmits(['delete-todo', 'toggle-todo']);
const deleteHandler = () => {
  emit('delete-todo', props.item.id);
};
const toggleHandler = () => {
  emit('toggle-todo', props.item.id);
};
</script>

<style scoped></style>
