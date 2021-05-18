import Vue from 'vue'
import App from './App.vue'

import Vuelidate from 'vuelidate'

// Подключение плагина Vuelidate. Следующий можно подключить через запятую и т.д
Vue.use(Vuelidate)

import './assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
