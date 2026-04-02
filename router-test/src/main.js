import { createApp } from 'vue'
import App from './App.vue'

//router 임포트
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
