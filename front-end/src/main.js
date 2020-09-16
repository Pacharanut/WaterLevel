// =========================================================
// * Vuetify Material Dashboard - v2.1.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vuetify-material-dashboard
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import LongdoMap from 'longdo-map-vue'
import x5GMaps from 'x5-gmaps'

Vue.use(x5GMaps, 'AIzaSyBrIEsCscz5xx4hu8cFoqg79vKt_rmNsLM')
Vue.use(x5GMaps, { key: 'AIzaSyBrIEsCscz5xx4hu8cFoqg79vKt_rmNsLM', libraries: ['places'] })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
  LongdoMap,
  load: {
    apiKey: 'AIzaSyBrIEsCscz5xx4hu8cFoqg79vKt_rmNsLM'
  },
}).$mount('#app')
