const app = Vue.createApp({
    data() {
        return {
            search: null,
            itemList: ["elma", "kivi", "çilek", "kavun"],
            // filteredList: []
        }
    },
    methods: {
        searchList() {
            // this.filteredList = this.itemList.filter(item => item.includes(this.search))
        },
    },
    computed: {
        filteredList() {
            return this.itemList.filter(item => item.includes(this.search))
        },
    },
}).mount("#app");