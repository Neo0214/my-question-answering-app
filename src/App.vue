<template>
  <div id="app">
    <!-- 主要布局 -->
    <!-- 路由视图：当前路由组件将在这里被渲染 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  // 如果需要添加全局数据或方法，可以在这里添加
};
</script>

<style>
/* 全局样式 */
html, body, #app {
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
