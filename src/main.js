/* eslint-disable no-unused-vars */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import FileSaver from 'file-saver'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted () {
    // var blob = new Blob(['{"hello":"world"}'], {type: 'application/json'})
    // FileSaver.saveAs(blob, 'helloWorld.json')
  }
})
