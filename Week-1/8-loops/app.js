const app = Vue.createApp({
    data() {
        return {
            todoList: [ 
                { id: 1, text: "Vue Bootcamp Hafta 1", completed: true },
                { id: 2, text: "Vue Bootcamp Hafta 2", completed: false },
                { id: 3, text: "Vue Bootcamp Hafta 3", completed: false },
                { id: 4, text: "Vue Bootcamp Hafta 4", completed: false },
                { id: 5, text: "Vue Bootcamp Hafta 5", completed: false },
            ],
            showContainer: false,
        };
    },
    methods: {
        addTodo(event) {
            this.todoList.push({
                id: new Date().getTime(),
                text: event.target.value,
                completed: false,
            });
            event.target.value = "";
        },

        removeItem(todoItem) {
            this.todoList = this.todoList.filter(todo => todo.id != todoItem.id)
            // this.todoList = this.todoList.filter(todo => todo != todoItem)
            // ikisde aynı işi görür (pass by reference)
        }
    },
    computed: {
        completedItemCount() {
            return this.todoList.filter(todo => todo.completed).length;
        },
        unCompletedItemCount() {
            return this.todoList.filter(todo => !todo.completed).length;
        },
    }
}).mount("#app");