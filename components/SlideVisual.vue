<template>
  <div class="visual-area">
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectFade, SwiperPagination]"
      :slides-per-view="1"
      :controllar="true"
      :pagination="{ type: 'progressbar' }"
      :loop="true"
      :effect="'fade'"
      :autoplay="{ delay: 3000, disableOnInteraction: true }"
      class="visual-slide"
    >
      <SwiperSlide>
        <a href="javascript:void(0);">
          <img src="/assets/images/common/img-visual01.jpg" alt="" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="javascript:void(0);">
          <img src="/assets/images/common/img-visual02.jpg" alt="" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="javascript:void(0);">
          <img src="/assets/images/common/img-visual03.jpg" alt="" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="javascript:void(0);">
          <img src="/assets/images/common/img-visual04.jpg" alt="" />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="javascript:void(0);">
          <img src="/assets/images/common/img-visual05.jpg" alt="" />
        </a>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
// var visualSwiper = new Swiper(".visual-slide");
// var pagingSwiper = new Swiper(".visual-slide", {
//   pagination: {
//     el: ".swiper-pagination-fraction",
//     type: "fraction",
//   },
// });
// visualSwiper.controller.control = pagingSwiper;
</script>

<style lang="scss">
.visual-area {
  .swiper-slide:not(.swiper-slide-active) {
    opacity: 0 !important;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
}
.visual-slide {
  .swiper-slide {
    a {
      display: block;
    }
  }
  .swiper-pagination {
    top: unset;
    bottom: 0;
    background: #f0f0f0;
    .swiper-pagination-progressbar-fill {
      background: #141414;
    }
  }
}
</style>
