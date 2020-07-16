<template>
  <div class="main-wrap">
    <div class="welcome-box">
      <span class="text">WELCOME</span>
    </div>
    <div class="video-box">
      <img src="~assets/images/child_river_dreams.jpg" alt="" />
    </div>
    <div class="banner-recommend-box">
      <banner-recommend></banner-recommend>
    </div>
    <ul class="card-box">
      <li class="card-item">
        <card></card>
      </li>
      <li class="card-item">
        <card></card>
      </li>
      <li class="card-item">
        <card></card>
      </li>
    </ul>
    <div class="author-box">
      <div class="author-left">
        <img class="author-pic" src="~assets/images/child_river_dreams.jpg" alt="author">
      </div>
      <div class="author-right">
        <p class="title">茉莉茉莉</p>
        <p class="desc">软件设计、开发</p>
        <div class="affiliation">
          <p class="title">联系：</p>
          <img class="affiliation-qr" src="~assets/images/QR-code.jpg" alt="QR">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/home/Card/Card'
import BannerRecommend from '~/components/home/BannerRecommend/BannerRecommend'

export default {
  layout: 'default-white',
  components: {
    Card,
    BannerRecommend
  }
}
</script>

<style lang="less" scoped>
@import 'index.less';
</style>
