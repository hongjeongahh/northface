<template>
  <Swiper
    :space-between="12"
    :slides-per-view="1.6"
    :controllar="true"
    class="staff-gallery">
    <SwiperSlide v-for="(like, index) in likes" :key="index">
      <a href="javascript:void(0);">
        <img
          :src="getImageUrl(like.src)"
          alt=""
        />
        <div class="like">
          <span class="num">{{ like.num }}</span>
        </div>
      </a>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
const likes = [
  {num: 3, src:"img-staff1.jpg"},
  {num: 5, src:"img-staff2.jpg"},
  {num: 2, src:"img-staff3.jpeg"},
  {num: 3, src:"img-staff4.png"},
  {num: 7, src:"img-staff5.jpeg"},
];

const getImageUrl = (src) => {
  return `/assets/images/common/${src}`;
};
</script>

<style lang="scss" scoped>
.staff-gallery {
  padding: 0 0 0 2rem;
  .swiper-slide {
    position: relative;
    height: 100%;
    a {
      display: block;
      overflow: hidden;
      height: 84.61vw;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .like {
    position: absolute;
    left: 1.5rem;
    top: 1.5rem;
    .num {
      font-size: 1.8rem;
      color: #ffffff;
    }
  }
}
</style>