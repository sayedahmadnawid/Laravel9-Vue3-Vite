import './bootstrap';

import { createApp } from 'vue'
import router from './router.js'
import App from './App.vue'
import BaseContent from './components/ui/BaseContent.vue'

const app = createApp(App)

app.use(router)
app.component('base-content', BaseContent)

app.mount("#app")