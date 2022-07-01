const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            showContainer: false,
        };
    },
    computed: {
        counterBoxClass() {
            return { "bg-success text-white": this.counter > 0, "bg-danger text-white": this.counter < 0 }
        }
    }
}).mount("#app");