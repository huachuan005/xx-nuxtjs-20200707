<template>
  <div class="container" style="background-color: #ffffff;min-height: 100vh;">
    <h-header class="header"></h-header>
    <main class="main">
      <nuxt />
    </main>
    <f-footer class="footer"></f-footer>
  </div>
</template>

<style lang="less" scoped>
html,
body {
  height: 100%;
}
.container {
  .header {
    height: 80px;
  }
  .main {
    min-height: calc(100vh - 80px - 80px);
  }
  .footer {
    height: 80px;
  }
}
</style>
