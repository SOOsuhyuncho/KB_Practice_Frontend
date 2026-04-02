<template>
  <div class="row g-2 align-items-center">
    <div class="col">
      <input
        type="text"
        v-model="name"
        placeholder="이름"
        class="form-control"
      />
    </div>
    <div class="col">
      <select
        id="gender"
        v-model="gender"
        placeholder="성별"
        class="form-control"
      >
        <option value="m">남</option>
        <option value="f">여</option>
      </select>
    </div>
    <div class="col">
      <input
        type="text"
        v-model="age"
        placeholder="나이"
        class="form-control"
      />
    </div>
    <div class="col">
      <input
        type="text"
        v-model="email"
        placeholder="이메일"
        class="form-control"
      />
    </div>
    <div class="col">
      <input
        type="text"
        v-model="githubID"
        placeholder="github ID"
        class="form-control"
      />
    </div>
    <div class="col-auto">
      <button class="btn btn-primary px-4" @click="addHandler">추가</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputContact',
  data() {
    return {
      name: '',
      gender: 'm',
      age: '',
      email: '',
      githubID: '',
    };
  },
  methods: {
    addHandler() {
      if (this.name === '' || this.email === '') {
        alert('이름과 이메일을 올바르게 입력해주십시오.');
      } else {
        this.$emit('add-contact', {
          name: this.name,
          gender: this.gender,
          age: this.age,
          email: this.email,
          githubID: this.githubID,
        });
      }
    },
  },
};
</script>

<style scoped></style>
