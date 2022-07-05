<template>
    <ul>
        <li v-for="user in data" :key="user">{{ user }}</li>
    </ul>
</template>

<script>
export default {
    props: ["data"],
}
</script>