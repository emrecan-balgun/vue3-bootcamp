<template>
  <div class="container">
    <input type="text" :value="userData">
    <button @click="userData = 'Yeni değer'" >Set Data</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: null
    }
  }
}
</script>