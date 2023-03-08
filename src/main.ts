import { createApp } from "vue";
import { createPinia } from "pinia";

import "./style.css";
import App from "./App.vue";
import router from "./routes/router";
import store from "./@Stores/store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
/* import the fontawesome core */


const _pinia = createPinia();

createApp(App)
  
  .use(Antd)
  .use(store)
  .use(_pinia)
  .use(router)
  .mount("#app");
