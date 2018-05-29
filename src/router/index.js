import Vue from 'vue'
import Router from 'vue-router'
import CesiumViewer from '@/components/cesiumViewer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cesiumViewer',
      component: CesiumViewer
    }
  ]
})
