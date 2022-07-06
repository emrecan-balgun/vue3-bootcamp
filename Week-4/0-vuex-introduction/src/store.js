import { createStore } from 'vuex';

const store = createStore({
    state: {
        user: {
            name: "Emre",
            surname: "Balgun",
            age: 23,
            adress: {},
            password: 123456789,
        },
        fullName: "Emrecan",
        theme: "dark",
        permissions: [1,2,3,4,5],
        userList: ["a","b","c","d","e","f"],
        itemList: [
            { id: 1, title: "Masa", type: "Mobilya" },
            { id: 2, title: "Sandalye", type: "Mobilya" },
            { id: 3, title: "TV", type: "Elektronik" },
            { id: 4, title: "Koltuk", type: "Mobilya" },
            { id: 5, title: "PC", type: "Elektronik" },
            { id: 6, title: "Bardak", type: "Cam" }
        ]
    },
    getters: {
        _woodItems: state => state.itemList.filter(i => i.type === "Mobilya"),
        _activeUser(state) {
            const user = {
                ...state.user
            };
            delete user.password; // ekranda password göstermemek için siliyoruz (gizli alan olduğu için)
            return user;
        }
    },
    mutations: { // senkron çalışır
        newItem(state, item) {
            state.itemList.push(item);
        },
        // changeUser(state, payload) {}
    },
    actions: { // asenkron çalışır
        // newItem(context, item) { // asenkron bir şey varsa başına async yazılır
        newItem({ commit }, item) { // asenkron bir şey varsa başına async yazılır // context bir objedir, objenin içerisinden commit aldık
            console.log("item => ", item);
            setTimeout(() => { // asenkron bir şey varsa başına await yazılır
                // context.state
                // context.dispatch
                // context.commit("newItem", item); // mutationda ki yazdığımız fonksiyonu çağırır
                commit("newItem", item); // mutationda ki yazdığımız fonksiyonu çağırır
            }, 2000);
        }
    },
})

export default store;