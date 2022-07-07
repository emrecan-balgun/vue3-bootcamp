<template>
    <h1>Home</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quod.</p>
    <input type="text" @keydown.enter="goToDetails">
</template>

<script>
export default {
    methods: {
        goToDetails(event) {
            // alert(event.target.value);
            // this.$router.push(`/detail/${event.target.value}`);
            this.$router.push({
                name: "DetailPage",
                params: {
                    userID: event.target.value
                },
                query: {
                    type: "DetailAuth",
                    user: "emrecan",
                }
            })
        }
    }
}
</script>