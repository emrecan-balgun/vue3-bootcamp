import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

export default createStore({
    state: {
        user: null,
        saltKey: "booklike123!456?"

    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        logoutUser(state) {
            state.user = null;
        },
        setLikes(state, bookmarkIds) {
            state.user.likes = bookmarkIds;
        },
        setBookmarks(state, bookmarkIds) {
            state.user.bookmarks = bookmarkIds;
        }
    },
    getters: {
        _isAuthenticated: state => state.user !== null,
        _getCurrentUser(state) {
            const user = state.user;
            // if(user !== null && user.hasOwnProperty('password')) {
            //     delete user.password;
            // }
            delete user?.password;
            return user;
        },
        _getUserLikes: state => state.user?.likes ||[],
        _getUserBookmarks: state => state.user?.bookmarks ||[],
        _getCurrentUserID: state => state?.user?.id,
        _saltKey: state => state.saltKey
    },
    plugins: [createPersistedState({
        storage: {
          getItem: (key) => ls.get(key),
          setItem: (key, value) => ls.set(key, value),
          removeItem: (key) => ls.remove(key),
        }
      })
    ]
});