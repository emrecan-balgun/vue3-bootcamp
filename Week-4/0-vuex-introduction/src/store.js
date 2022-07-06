import { createStore } from 'vuex';

const store = createStore({
    state: {
        person: {
            name: "Emre",
            surname: "Balgun",
            age: 23
        },
        theme: "dark",
        permissions: [1,2,3,4,5]
    }
})

export default store;