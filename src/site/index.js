import Vue from 'vue'
import Vuetify from 'vuetify'

import App from '@/site/App'
import '@/site/imports'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  render (h) { return h(App) }
})
