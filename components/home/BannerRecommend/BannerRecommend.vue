<template>
  <div class="banner-recommend-list">
    <el-carousel :interval="10000" type="card" height="400px">
      <el-carousel-item v-for="item in 3" :key="item">
        <div class="banner-card">
          <img
            class="banner-pic"
            src="~assets/images/child_river_dreams.jpg"
            alt="介绍"
          />
          <div class="recommend-text">介绍{{ item }}</div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style lang="less" scoped>
@import 'BannerRecommend.less';
</style>
