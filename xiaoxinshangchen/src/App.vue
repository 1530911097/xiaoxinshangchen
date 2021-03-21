<template>
  <div id="app">
	 <router-view></router-view>
    <MainTabbar/>
  </div>
</template>

<script>
import MainTabbar from './components/content/mainTabbar/MainTabbar.vue'

export default {
  name: 'app',
  components: {
    MainTabbar
  }
}
</script>

<style>
@import url("./assets/css/base.css");
#app{
	width: 100%;
}
</style>
