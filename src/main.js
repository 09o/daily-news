import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Mixin from './mixins'
import store from './store'

Vue.use(Mixin, {})

Vue.config.productionTip = false

// 解决刷新页面store数据丢失的问题
if (sessionStorage.getItem("store")) {
  store.replaceState(
      Object.assign(
          {},
          store.state,
          JSON.parse(sessionStorage.getItem("store"))
      )
  );
  sessionStorage.removeItem("store")
}

//监听，在页面刷新时将vuex里的信息保存到sessionStorage里
window.addEventListener("beforeunload", () => {
  sessionStorage.setItem("store", JSON.stringify(store.state));
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
