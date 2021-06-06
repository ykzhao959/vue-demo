import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";
//全局引入Element组件
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


//注入依赖
const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount("#app"); //vue主入口

//createApp(App).use(store).use(router).use(ElementPlus).mount("#app");