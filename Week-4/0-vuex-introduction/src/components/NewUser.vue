<template>
    <button @click="updateName">Mobilya Ekle</button>
</template>

<script>
export default {
    methods: {
    updateName() {
      this.$store.state.itemList.push({id: 7, title: "Raf", type: "Mobilya"})
      this.$store.state.fullName = "Emre"
    }
  },
}
</script>