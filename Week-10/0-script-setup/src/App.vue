<template>
  <h3>{{ title }}</h3>
  <input type="text" v-model="title" >
  <button @click="increase">{{ counter }}</button>
  <hr />
  <oddOrEven :counter="counter" @odd-event="alertMe" />
</template>

<script setup>
import { ref } from 'vue';
import oddOrEven from './components/oddOrEven.vue';

  const title = ref("Test");
  const counter = ref(0);

  const increase = () => {
    counter.value++; // ref ile tutulduğu için value üzerinden ulaşılıyor
  }

  const alertMe = (info) => {
    console.log(info);
  }

</script>