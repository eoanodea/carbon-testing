import Vue from 'vue'
import App from './App.vue'

import './scss/app.scss'

import CarbonComponentsVue from '@carbon/vue/src/index';

Vue.config.productionTip = false

Vue.use(CarbonComponentsVue);

new Vue({
  render: h => h(App),
}).$mount('#app')
