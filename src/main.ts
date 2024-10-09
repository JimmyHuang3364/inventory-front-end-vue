import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/tailwind.css';
import 'swiper/swiper-bundle.css'; // 引入 Swiper CSS

const app = createApp(App)
const pinia = createPinia();

app.use(pinia);
app.use(store)
app.use(router)




app.mount('#app')
