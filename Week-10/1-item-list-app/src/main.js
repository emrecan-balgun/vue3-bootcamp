import { createApp } from 'vue'
import './assets/output.css'
import App from './App.vue'
import appHeading from './components/ui/appHeading.vue';

const app = createApp(App);
app.component("heading", appHeading);
app.mount('#app');
