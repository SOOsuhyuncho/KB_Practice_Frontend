<template>
  <div class="container mt-5" style="max-width: 900px">
    <div class="card shadow-sm">
      <div class="card-header text-center fs-4 fw-bold bg-light">
        우리반 Contact
      </div>
      <div class="card-body">
        <InputContact @add-contact="addContact"></InputContact>
        <hr class="my-4" />
        <ContactList
          :contactList="contactList"
          @delete-contact="deleteContact"
        ></ContactList>
      </div>
    </div>
  </div>
</template>

<script>
import InputContact from './components/InputContact.vue';
import ContactList from './components/ContactList.vue';

export default {
  name: 'App',
  data() {
    return {
      contactList: [
        {
          id: 1,
          name: '홍길동',
          gender: 'm',
          age: 20,
          email: 'hong@example.com',
          githubID: 'hongGD',
        },

        {
          id: 2,
          name: '짱구',
          gender: 'm',
          age: '7',
          email: 'janggu@example.com',
          githubID: 'janggu',
        },

        {
          id: 3,
          name: '유리',
          gender: 'f',
          age: '7',
          email: 'yuri@example.com',
          githubID: 'yuri',
        },
      ],
    };
  },
  methods: {
    addContact(contactInfo) {
      const newId = this.contactList[this.contactList.length - 1].id + 1;
      this.contactList.push({
        id: newId,
        name: contactInfo.name,
        gender: contactInfo.gender,
        age: contactInfo.age,
        email: contactInfo.email,
        githubID: contactInfo.githubID,
      });
    },
    deleteContact(targetId) {
      const index = this.contactList.findIndex((item) => item.id === targetId);
      this.contactList.splice(index, 1);
    },
  },
  components: {
    InputContact,
    ContactList,
  },
};
</script>

<style scoped></style>
