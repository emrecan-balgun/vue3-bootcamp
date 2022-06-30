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
        };
    },
}).mount("#app");

// Vue2 version
// new Vue({
//     data: {

//     }
// })