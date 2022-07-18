<template>
    <section class="mt-4">
        <TodoListItem />
        <TodoSummary />
    </section>
</template>

<script>
import TodoListItem from './todoListItem.vue';
import TodoSummary from './todoSummary.vue';
export default {
    components: { TodoListItem, TodoSummary },
}
</script>