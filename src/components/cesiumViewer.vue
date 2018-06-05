<template>
    <div id="cesiumContainer">
    </div>
</template>
<script type="text/javascript">
/* eslint-disable no-unused-vars */

import Cesium from 'cesium/Cesium'
import widgets from 'cesium/Widgets/widgets.css'
import viewerCesiumNavigationMixin from '../widget/navi/viewerCesiumNavigationMixin'
export default {
  name: 'cesiumViewer',
  data () {
    return {
      viewer: undefined
    }
  },
  mounted () {
    var vm = this
    this.viewer = new Cesium.Viewer('cesiumContainer')
    viewerCesiumNavigationMixin(this.viewer, {})
    // var dataSource1 = new Cesium.KmlDataSource()
    // dataSource1.load('./static/gdpPerCapita2008.kmz')
    // this.viewer.dataSources.add(dataSource1)
    vm.viewer.dataSources.add(Cesium.KmlDataSource.load('/static/慈江道公路.kmz',
      {
        camera: vm.viewer.scene.camera,
        canvas: vm.viewer.scene.canvas
      })
    )
  }
}
</script>
<style lang="less">
  @import '../widget/navi/styles/cesium-navigation';
</style>
