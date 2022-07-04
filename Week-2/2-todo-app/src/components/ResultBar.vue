<template>
    <!-- <small class="d-flex justify-content-end green mt-2">{{ todoList.length }} adet todo var.</small> -->
    <small class="d-flex justify-content-end green mt-2">{{ itemCount }} adet todo var.</small>
</template>

<script>
    export default {
        props: ["itemCount"]
    }
</script>