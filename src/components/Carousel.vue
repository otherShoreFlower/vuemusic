<template>
  <div class="banner">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(banner, index) in banners" :key="index">
        <img :src="banner" alt>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "Carousel",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        autoplay: true
      }
    };
  },
  props: {
    banners: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.banner {
  padding: 10px;
}

.banner img {
  border-radius: 10px;
}
</style>
