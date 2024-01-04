// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// 创建并挂载根实例。
createApp(App).use(router).mount('#app');
