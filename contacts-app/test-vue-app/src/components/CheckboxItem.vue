<template>
  <li><input type="checkbox" v-model="checked" />옵션1</li>
</template>

<script>
export default {
  name: 'CheckboxItem',
  props: ['name', 'checked', 'id'],
};
</script>
