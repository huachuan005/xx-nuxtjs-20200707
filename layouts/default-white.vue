<template>
  <div class="container">
    <h-header class="header"></h-header>
    <main class="main">
      <nuxt />
    </main>
    <f-footer class="footer"></f-footer>
  </div>
</template>

<style lang="less">
html,
body {
  background: #fff7e4;
  height: 100%;
}
.container {
  min-height: 100vh;
  .header {
    height: 80px;
  }
  .main {
    min-height: calc(100vh - 80px - 30px);
  }
  .footer {
    height: 30px;
  }
}
</style>
