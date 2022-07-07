<template>
    <h1>Details</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, explicabo.</p>
    <p>{{ $route.params.userID }}</p>
    <button @click="goBack">Geri Dön</button>
</template>

<script>
import router from '@/router'

export default {
    created() {
        console.log(this.$route)
    },
    methods: {
        goBack() {
            this.$router.push("/public");
        }
    }
}
</script>