<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style lang="less">
// 清除html，body的内网边距
html,body{
  margin: 0;
  padding: 0;
}
</style>
