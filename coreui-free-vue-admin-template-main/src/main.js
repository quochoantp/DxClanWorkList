import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// import DocsCallout from '@/components/DocsCallout'
// import DocsExample from '@/components/DocsExample'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// // Import Bootstrap an BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project

const app = createApp(App)
// app.use(BootstrapVue)
// // Optionally install the BootstrapVue icon components plugin
// app.use(IconsPlugin)
app.use(store)
app.use(router)
app.use(CoreuiVue)
app.provide('icons', icons)
app.component('CIcon', CIcon)
// app.component('DocsCallout', DocsCallout)
// app.component('DocsExample', DocsExample)

app.mount('#app')
