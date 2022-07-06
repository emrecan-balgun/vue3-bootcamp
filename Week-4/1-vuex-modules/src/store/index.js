import { createStore } from 'vuex';
import contact from './modules/contact';
import taskManager from './modules/taskManager';

const store = createStore({
    state: {
        mainName: "emron"
    },
    modules: {
        // contact : contact,
        musteri : contact,
        taskManager
    }
})

export default store;