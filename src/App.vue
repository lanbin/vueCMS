<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import packageConfig from '../package.json'

export default {
  name: 'app',
  data () {
    return {
      title: packageConfig.name
    }
  }
}
</script>

<style>

</style>
