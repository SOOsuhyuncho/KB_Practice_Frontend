<template>
  <li
    class="list-group-item d-flex justify-content-between align-items-center todo-item-container"
    :class="{ 'list-group-item-success': item.completed }"
  >
    <div v-if="!isEditing" class="d-flex align-items-center w-100">
      <input
        class="form-check-input me-3 shadow-none"
        type="checkbox"
        :checked="item.completed"
        @change="toggleHandler"
      />

      <span
        :class="{ 'text-decoration-line-through text-muted': item.completed }"
        @dblclick="startEdit"
        class="flex-grow-1"
      >
        {{ item.todo }}
      </span>

      <div class="action-buttons">
        <button class="btn-notion" @click="startEdit" title="수정">✎</button>
        <button
          class="btn-notion delete-icon"
          @click="deleteHandler"
          title="삭제"
        >
          ✕
        </button>
      </div>
    </div>

    <div v-else class="d-flex align-items-center w-100">
      <input
        type="text"
        class="form-control me-2 shadow-none"
        v-model="editTodoText"
        @keyup.enter="finishEdit"
      />
      <button
        class="btn btn-sm btn-custom btn-custom-confirm me-1"
        @click="finishEdit"
      >
        확인
      </button>
      <button
        class="btn btn-sm btn-custom btn-custom-secondary"
        @click="cancelEdit"
      >
        취소
      </button>
    </div>
  </li>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['item']);
const emit = defineEmits(['delete-todo', 'toggle-todo', 'update-todo']);
const isEditing = ref(false);
const editTodoText = ref('');

const deleteHandler = () => {
  emit('delete-todo', props.item.id);
};
const toggleHandler = () => {
  emit('toggle-todo', props.item.id);
};

const startEdit = () => {
  isEditing.value = true;
  editTodoText.value = props.item.todo;
};
const finishEdit = () => {
  if (editTodoText.value.trim() !== '') {
    emit('update-todo', props.item.id, editTodoText.value);
    isEditing.value = false;
  }
};

const cancelEdit = () => {
  isEditing.value = false;
};
</script>

<style scoped>
.todo-item-container {
  border: none;
  border-bottom: 1px solid #f0f0f0;
  border-radius: 0;
  padding: 12px 16px;
  background-color: transparent;
  transition: background-color 0.2s;
}

.todo-item-container:hover {
  background-color: #f9f9f9;
}

.action-buttons {
  opacity: 0.3;
  transition: opacity 0.2s ease-in-out;
  display: flex;
  gap: 6px;
}

.todo-item-container:hover .action-buttons {
  opacity: 1;
}

.btn-notion {
  background: #f8f9fa;
  border: 1px solid #f1f3f5;
  color: #adb5bd;
  font-size: 1.1rem;
  padding: 4px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-notion:hover {
  background-color: #e9ecef;
  border-color: #dee2e6;
  color: #495057;
}

.btn-notion.delete-icon:hover {
  background-color: #ffe3e3;
  border-color: #ffc9c9;
  color: #fa5252;
}

.form-check-input {
  cursor: pointer;
  width: 1.2em;
  height: 1.2em;
}
</style>
