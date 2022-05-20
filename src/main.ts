import { createApp } from "vue";
import { createPinia } from "pinia";
import Root from "./App.vue";
import router from "./router";
import "./assets/styles/main.scss";
import { registerGlobalComponents } from "./plugins/components";

const app = createApp(Root)
  .use(createPinia())
  .use(router);

registerGlobalComponents(app);

app.mount("#app");
