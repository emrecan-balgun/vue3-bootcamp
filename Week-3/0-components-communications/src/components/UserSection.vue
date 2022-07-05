<template>
    <ListSection />
    <AddSection />
</template>

<script>
import ListSection from "./ListSection.vue";
import AddSection from "./AddSection.vue";

export default {
    // props: ["data"],
    // emits: ["new-item"],
    components: { ListSection, AddSection }
}
</script>