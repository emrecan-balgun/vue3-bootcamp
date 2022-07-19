<template>
    <h1>{{ props.counter }} {{ result }}</h1>
</template>

<script setup>
import { computed, watch } from 'vue';

const props = defineProps({ counter: Number });
const emit = defineEmits(["odd-event"]); //dokümante etmek için yazdık, aşağıda ki emitin çalışmasıyla ilgisi yok
const result = computed(() => props.counter % 2 == 0 ? '(Çift)' : '(Tek)');

watch(result, (result) => {
    if(result === '(Tek)')
        emit("odd-event", true);
})

</script>