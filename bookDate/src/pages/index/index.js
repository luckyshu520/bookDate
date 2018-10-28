// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store'

import router from '../../router'

// import Toast from '@/components/common/Toast/Toast.js';
// import Loading from '@/components/common/Loading/Loading.js';

// Vue.use(Toast);
// Vue.use(Loading);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
