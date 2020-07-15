<template>
  <div class="h-header">
    <div class="logo">
      <img class="moli-icon" src="~assets/images/moli.png" alt="茉莉" />
      <span class="title">茉莉茉莉</span>
    </div>
    <ul class="menu">
      <li>首页</li>
      <li>作品</li>
      <li>介绍</li>
      <li>联系我</li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.h-header {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    padding: 0 20px;
    display: inline-flex;
    justify-content: center;
    align-content: center;
    .moli-icon {
      width: 40px;
      height: 40px;
    }
    .title {
      display: inline-block;
    }
  }

  .menu {
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;

    li {
      padding: 20px;
      transform: rotate(-90deg);
      -ms-transform: rotate(-90deg); /* IE 9 */
      -moz-transform: rotate(-90deg); /* Firefox */
      -webkit-transform: rotate(-90deg); /* Safari 和 Chrome */
      -o-transform: rotate(-90deg); /* Opera */
    }
  }
}
</style>


