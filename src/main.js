import { createApp } from 'vue'
import App from './App.vue'
import  { createRouter,createWebHistory }  from 'vue-router'
import EmulationTitle from './views/category/EmulationTitle.vue'

// Khai báo router
const routes = [
    { path: '/category', component: EmulationTitle },


]

// khởi tạo router
const vueRouter = createRouter({ 
    history: createWebHistory(), 
    routes :routes
})

// Sử dụng router
const app = createApp(App);
app.use(vueRouter).mount('#app') ;
