import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from 'store'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

const app = createApp(App)
const piniaStore = createPinia()
piniaStore.use(piniaPluginPersist)
app.config.globalProperties.$store = store
app.use(piniaStore).use(router).use(ElementPlus).mount('#app')

// 获取原型
const prototype = app.config.globalProperties
// 绑定参数
prototype.name = 'Bob'

//#region
const aas: Array<number> = [1, 2,3]
const arr: string[] = ['111', '223']
aas.map((item: number) => {
  console.log(item)
  return item
})
console.log(aas, arr)
//#endregion


// 以 知识点 划分模块，增强巩固
