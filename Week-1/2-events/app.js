const app = Vue.createApp({
    data() {
        return {
            fullName: "Emre",
        };
    },
    methods: {
        updateValue(event) {
            console.log(event.target.value);
            this.fullName = event.target.value
        }
    }
}).mount('#app');