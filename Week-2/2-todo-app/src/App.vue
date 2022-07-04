<template>
  <div class="container">
    <h3 class="text-center">ToDo App</h3>
    <hr class="my-2">
    <AddSection @add-todo="addNewTodo" />
    <TodoList @delete-todo-item="deleteItem" :myData="todoList" />
    <!-- <TodoList v-bind:myData="todoList" /> -->
    <ResultBar :itemCount="todoList.length" />
  </div>
</template>

<script>
  import AddSection from "@/components/AddSection";
  import TodoList from "@/components/TodoList";
  import ResultBar from "@/components/ResultBar";

export default {
  components: {
    AddSection,
    TodoList,
    ResultBar,
  },
  created() {
    setTimeout(() => {
      this.todoList = [
        { id: 1, text: "Bootcamp #2" },
        { id: 2, text: "Bootcamp #3" },
        { id: 3, text: "Bootcamp #4" },
        { id: 4, text: "Bootcamp #5" },
        { id: 5, text: "Bootcamp #6" },
      ]
    }, 2000);
  },
  data() {
    return {
      todoList: []
    }
  },
  methods: {
    deleteItem(todoItem) {
      this.todoList = this.todoList.filter((todo) => todo !== todoItem)
    },
    addNewTodo(todo) {
      this.todoList.push({
        id: new Date().getTime(),
        text: todo
      })
    },
  }
}
</script>