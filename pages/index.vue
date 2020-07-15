<template>
  <div class="main-box">
    <div class="welcome-box">
      <span class="text">WELCOME</span>
    </div>
    <div class="video-box">
      <img src="~assets/images/video-thumbnail.svg" alt="" />
    </div>
    <ul class="card-box">
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'default-white'
}
</script>

<style lang="less" scoped>
.main-box {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 0 40px 0;
  display: flex;
  flex-direction: column;
  .welcome-box {
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .text {
      font-size: 10rem;
      font-weight: 900;
      letter-spacing: 8px;
    }
  }
  .video-box {
    margin: 0 auto;
    width: 90%;
    img {
      width: 100%;
    }
  }
}
</style>
