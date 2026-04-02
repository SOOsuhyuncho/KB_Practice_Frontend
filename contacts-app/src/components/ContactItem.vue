<template>
  <tr>
    <td>{{ item.name }}</td>
    <td>{{ item.gender === 'm' ? '남' : '여' }}</td>
    <td>{{ item.age }}</td>
    <td>{{ item.email }}</td>
    <td>{{ item.githubID }}</td>

    <td>
      <button class="btn btn-danger btn-sm" @click="deleteHandler">삭제</button>
    </td>
  </tr>
</template>
<script>
export default {
  name: '',
  data() {
    return {};
  },
  methods: {
    deleteHandler() {
      this.$emit('delete-contact', this.item.id);
    },
  },
  props: ['item'],
};
</script>

<style scoped></style>
