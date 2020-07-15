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
  box-shadow: 0 0 10px rgba(205, 205, 205, 0.8);
  .logo {
    cursor: pointer;
    height: 80px;
    line-height: 80px;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    .moli-icon {
      width: 40px;
      height: 40px;
      margin-right: 12px;
    }
    .title {
      font-weight: 900;
      font-size: 20px;
      display: inline-block;
    }
  }

  .menu {
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 20px;

    li {
      font-weight: 900;
      font-size: 20px;
      padding: 0 20px;
      cursor: pointer;
      transform: rotate(-90deg);
      -ms-transform: rotate(-90deg); /* IE 9 */
      -moz-transform: rotate(-90deg); /* Firefox */
      -webkit-transform: rotate(-90deg); /* Safari 和 Chrome */
      -o-transform: rotate(-90deg); /* Opera */
      &:hover {
        color: #4faab7;
      }
    }
  }
}
</style>


