import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/style.css';
import appHeader from '@/components/Shared/appHeader';
import appBookmarkList from '@/components/Shared/appBookmarkList';
import { appAxios } from './utils/appAxios';
import VueCryptojs from 'vue-cryptojs'
import store from './store';

const app = createApp(App);
app.component("appHeader", appHeader);
app.component("appBookmarkList", appBookmarkList);
app.use(router);
app.use(VueCryptojs);
app.use(store);
app.config.globalProperties.$appAxios = appAxios;
app.mount('#app');
