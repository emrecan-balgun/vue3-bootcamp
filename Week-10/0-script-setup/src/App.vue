<template>
  <h3>{{ title }}</h3>
  <input type="text" v-model="title" >
  <button @click="increase">{{ counter }}</button>
</template>

<script setup>
import { ref } from 'vue';

  const title = ref("Test");
  const counter = ref(0);

  const increase = () => {
    counter.value++; // ref ile tutulduğu için value üzerinden ulaşılıyor
  }

</script>