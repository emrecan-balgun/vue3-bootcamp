<template>
  <h3>{{ title }}</h3>
  <input type="text" v-model="title" >
  <button @click="increase">{{ counter }}</button>
  <hr />
  <oddOrEven :counter="counter" @odd-event="alertMe" />
  <h1>User App</h1>
  <input type="text" v-model="state.personal.name">
  <input type="text" v-model="state.personal.lname">
  {{ state.personal }}
</template>

<script setup>
import { watch, reactive } from 'vue';
// beforeCreate() created() ve data() yerine geçer (setup)
import oddOrEven from './components/oddOrEven.vue';
import Utils from './composables/Utils.js';
const { title, counter, increase, alertMe } = Utils();

// objelerde ref kullanımı önerilmez onun yerine reactive kullanılır
// UserApp
const state = reactive({
  personal: {
    name: null,
    lname: null,
  }
})

watch(
  () => JSON.parse(JSON.stringify(state.personal)), // bu şekillde kullanılıyor watch ederken
  (newPersonal, oldPersonal) => {
  console.log(oldPersonal, " => ", newPersonal);
})

</script>