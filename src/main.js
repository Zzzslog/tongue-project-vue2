import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router"
import store from './store';
import request from './network/request';
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.request=request
new Vue({
  router,//挂载根节点
  store,
  render: h => h(App),
}).$mount('#app')
