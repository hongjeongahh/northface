<template>
  <div class="banner-wrap">
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectFade]"
      :slides-per-view="1"
      :loop="true"
      :effect="'fade'"
      :autoplay="{ delay: 4000, disableOnInteraction: true }"
      class="header-banner"
    >
      <SwiperSlide>
        <p>온라인 단독 상품 15%OFF + 앱 구매 시 추가 5% 할인</p>
      </SwiperSlide>
      <SwiperSlide>
        <p>멤버십 쿠폰팩</p>
      </SwiperSlide>
    </Swiper>
    <button type="button" class="btn-close" @click="closeBanner">
      <span class="hide">배너 닫기</span>
    </button>
  </div>
</template>

<script setup>
function closeBanner() {
  const banner = document.querySelector(".banner-wrap");
  const mainArea = document.querySelector("main");
  banner.remove();
  mainArea.style.marginTop = 108 + "px";
}
</script>

<style lang="scss" scoped>
.swiper-slide-prev,
.swiper-slide-next {
  opacity: 0 !important;
}
.swiper-slide {
  height: 4rem;
  p {
    text-align: center;
    font-size: 1.3rem;
    line-height: 4rem;
    letter-spacing: -0.05rem;
    color: #fff;
  }
}
.banner-wrap {
  // position: fixed;
  position: relative;
  left: 0;
  top: 0;
  z-index: 20;
  width: 100%;
  background: #000;
  // transition: top 0.3s;
  .btn-close {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    width: 2rem;
    height: 2rem;
    z-index: 10;
    &::before {
      content: "";
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      width: 0.1rem;
      height: 1.4rem;
      background: #ffffff;
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      width: 0.1rem;
      height: 1.4rem;
      background: #ffffff;
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
}
</style>
