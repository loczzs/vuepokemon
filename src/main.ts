import { createApp } from "vue";
import { createPinia } from "pinia";
import Vue from "vue";

import "./style.css";
import App from "./App.vue";
import router from "./routes/router";
import store from "./@Stores/store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import VueAnimateOnScroll from 'vue3-animate-onscroll';
import 'animate.css';


const _pinia = createPinia();

createApp(App)
.use(VueAnimateOnScroll)
  .use(Antd)
  .use(store)
  .use(_pinia)
  .use(router)
  
  .mount( "#app");
