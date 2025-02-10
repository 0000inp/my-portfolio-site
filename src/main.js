import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'
import router from './router'

createApp(App)
    .use(VuePlyr, {plyr: {}})
    .use(router)
    .mount('#app')


