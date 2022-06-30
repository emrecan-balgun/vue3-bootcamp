const app = Vue.createApp({
    data(){
        return {
            title: "Vue.js Bootcamp 1. gün",
            content: "Lorem ipsum dolor sit amet..",
            eduflow: {
                title: "Müfredat ve açıklamalar için tıklayınız.",
                target: "_blank",
                url: "https://eduflow.kablosuzkedi.com",
                alt: "muferadat-ve-aciklamalar"
            },
            owner: "emron",
            coords: {
                x: 0,
                y: 0
            }, 
        };
    },
    methods: {
        changeTitle(title) {
            this.title = title;
        },
        updateCoords(message, event) {
            this.changeTitle(`${message}, ${event.x},${event.y}`)
            this.coords = {
                x : event.x,
                y : event.y,
            }
        }
    }
}).mount("#app");

// Vue2 version
// new Vue({
//     data: {

//     }
// })