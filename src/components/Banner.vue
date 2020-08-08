<template>
  <div class="main-banner">
    <el-carousel :interval="7000" arrow="never" trigger="click">
      <el-carousel-item
        v-for="(bannerImage, index) in bannerImages"
        :key="index"
      >
        <div
          class="slider-img"
          :style="{ 'background-image': 'url(' + bannerImage.img + ')' }"
        ></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data() {
    return {
      bannerImages: [
        {
          id: 1,
          name: 'Image 1',
          img: require('../assets/images/Home/banner.jpg'),
        },
        {
          id: 2,
          name: 'Image 2',
          img: require('../assets/images/Home/banner.jpg'),
        },
        {
          id: 3,
          name: 'Image 3',
          img: require('../assets/images/Home/banner.jpg'),
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.el-carousel__item {
  .slider-img {
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
  }
  img {
    width: 100%;
  }
}
</style>
