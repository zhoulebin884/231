<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <span class="glyphicon glyphicon-envelope"></span>
    <mt-header fixed class="btu" title="固定在顶部"></mt-header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
}
</style>
