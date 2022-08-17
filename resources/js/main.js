import './bootstrap';

import { createApp } from 'vue'
import router from './router.js'
import App from './App.vue'
import BaseContent from './components/ui/BaseContent.vue'
import BaseButton from "./components/ui/BaseButton.vue"
import BaseTextbox from './components/ui/BaseTextbox.vue'

const app = createApp(App)

app.use(router)
app.component('base-content', BaseContent)
app.component('base-button', BaseButton)
app.component('base-text-box', BaseTextbox)

app.mount("#app")