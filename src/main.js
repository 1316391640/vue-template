import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import components from './components/index'
import router from '@/router'
import 'reset-css'
import '@/assets/style/varable.scss'
import 'ant-design-vue/dist/reset.css'
import App from '@/App.vue'

createApp(App).use(Antd).use(components).use(router).mount('#app')
