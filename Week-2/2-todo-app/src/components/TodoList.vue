<template>
    <ul>
      <TodoListItem @delete-todo-item="$emit('delete-todo-item', $event)" v-for="todoItem in myData" :key="todoItem.id" :item="todoItem" />
    </ul>
</template>

<script>
  import TodoListItem from "@/components/TodoListItem";

  export default {
    props: ["myData"],
    // data() {
    //   return {
    //     myData: ""
    //   }
    // }
    // props: {
    //   myData: {
    //     type: String,
    //     required: false,
    //     default: "",
    //   }
    // }
    components: {
      TodoListItem
    }
  }
</script>