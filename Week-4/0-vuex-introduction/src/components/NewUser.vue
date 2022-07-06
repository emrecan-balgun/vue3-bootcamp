<template>
    <button @click="updateName">Mobilya Ekle</button>
</template>

<script>
export default {
    methods: {
    updateName() {
        const userData = {id: new Date().getTime(), title: "Raf" + new Date().getTime(), type: "Mobilya"};
        // this.$store.commit("newItem", userData) // mutationlar commit edilir
        this.$store.dispatch("newItem", userData) // actionslar dispatch edilir
        // this.$store.state.fullName = new Date().getTime();
    }
  },
}
</script>