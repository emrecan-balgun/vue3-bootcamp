<script setup>
// import Input from './components/Forms/Input.vue';
// import Label from './components/Forms/Label.vue';
// import Select from './components/Forms/Select.vue';
import * as Form from './components/form-components';
</script>

<template>
  <!-- <Label>
    Başlık
    <Input />
  </Label>
  <Label>
    Kategori
    <Select />
  </Label> -->
  <Form.Label>
    Başlık
    <Form.Input />
  </Form.Label>
  <Form.Label>
    Kategori
    <Form.Select />
  </Form.Label>
</template>