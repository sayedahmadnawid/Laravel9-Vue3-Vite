import './bootstrap';

import { createApp } from 'vue'
import router from './router.js'
import App from './App.vue'
import BaseContent from './components/ui/BaseContent.vue'
import TheLeftNavBar from "./components/layout/TheLeftNavBar.vue";
import BaseButton from "./components/ui/BaseButton.vue";

const app = createApp(App)

app.use(router)
app.component('base-content', BaseContent)
app.component('the-left-nav-bar', TheLeftNavBar)
app.component('base-button', BaseButton)

app.mount("#app")