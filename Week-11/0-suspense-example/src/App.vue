<script setup>
import { onErrorCaptured, ref, defineAsyncComponent } from 'vue'
// import Todos from './components/Todos.vue';
// import Users from './components/User.vue';
const Todos = defineAsyncComponent(() => import('./components/Todos.vue'));
const Users = defineAsyncComponent(() => import('./components/User.vue'));
const err = ref(null);

onErrorCaptured((e) => {
  err.value = e;
  return true;
});
</script>

<template>
  <span v-if="err" class="error">{{ err }}</span>
  <suspense v-else>
    <template #default>
      <div>
        <Users />
        <hr />
        <Todos />
      </div>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </suspense>
</template>

<style scoped>
.error {
  color: red;
  font-size: 20px;
}
</style>