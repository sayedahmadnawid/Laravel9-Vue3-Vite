import './bootstrap';

import { createApp } from 'vue'
import router from './router.js'
import store from './store/index.js';
import App from './App.vue'
import BaseContent from './components/ui/BaseContent.vue'
import BaseButton from "./components/ui/BaseButton.vue"
import BaseTextbox from './components/ui/BaseTextbox.vue'
import BaseAlert from './components/ui/BaseAlert.vue'

const app = createApp(App)

app.use(router)
app.use(store)
app.component('base-content', BaseContent)
app.component('base-button', BaseButton)
app.component('base-text-box', BaseTextbox)
app.component('base-alert', BaseAlert)

app.mount("#app")