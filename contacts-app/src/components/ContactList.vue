<template>
  <div class="table-responsive">
    <table class="table table-hover align-middle text-center mb-0">
      <thead class="table-light">
        <tr>
          <th>이름</th>
          <th>성별</th>
          <th>나이</th>
          <th>이메일</th>
          <th>Github ID</th>
          <th>관리</th>
        </tr>
      </thead>

      <tbody>
        <ContactItem
          v-for="item in contactList"
          :key="item.id"
          :item="item"
          @delete-contact="(id) => $emit('delete-contact', id)"
        ></ContactItem>
      </tbody>
    </table>
  </div>
</template>

<script>
import ContactItem from './ContactItem.vue';

export default {
  name: 'ContactList',
  data() {
    return {};
  },
  methods: {},
  components: {
    ContactItem,
  },
  props: ['contactList'],
};
</script>

<style scoped></style>
