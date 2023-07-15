<template>
  <div id="app">
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件会渲染此处 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style lang="less">
  html,body{
    margin: 0;
    padding:0;
  }
  .el-aside{
    overflow: hidden !important;
  }
</style>
