<template>
  <Swiper
    :space-between="16"
    :slides-per-view="1.2"
    :controllar="true"
    class="slide-con"
  >
    <SwiperSlide>
      <img src="/assets/images/common/img-mainconslide01.jpg" alt="" />
      <div class="box">
        <strong class="tit">M'S 1996 WATER SHIELD<br />NUPTSE JACKET</strong>
        <p class="txt">방수를 더한 기능성 프리미엄 눕시 자켓</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <img src="/assets/images/common/img-mainconslide02.jpg" alt="" />
      <div class="box">
        <strong class="tit">SUMMIT PRO<br />DOWN JACKET</strong>
        <p class="txt">열손실 없이 강한 구스다운 자켓</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <img src="/assets/images/common/img-mainconslide03.jpg" alt="" />
      <div class="box">
        <strong class="tit">FELIX GORE-TEX<br />JACKET</strong>
        <p class="txt">테크위어의 완성! 고어텍스 자켓</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <img src="/assets/images/common/img-mainconslide04.jpg" alt="" />
      <div class="box">
        <strong class="tit">M'S CROSS TRAINING<br />JACKET</strong>
        <p class="txt">편안함 움직임! 트레이닝 하이브리드 자켓</p>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup></script>

<style lang="scss" scoped>
.slide-con {
  padding: 0 2rem;
  .swiper-slide {
    img {
      width: 100%;
      object-fit: cover;
    }
    .box {
      padding: 5.833vw 5.278vw 4.444vw;
      letter-spacing: -0.05rem;
    }
    .tit {
      display: block;
      font-size: 5.556vw;
      font-weight: 500;
      line-height: 1.2;
    }
    .txt {
      margin: 3.889vw 0 0;
      font-size: 3.611vw;
    }
  }
}
</style>
