<template>
  <Swiper
    :space-between="10"
    :slides-per-view="2.3"
    :controllar="true"
    class="slide-product-list"
  >
    <SwiperSlide v-for="(product, index) in products" :key="index">
      <a href="javascript:void(0);">
        <img
          :src="`/assets/images/product2/img-product-list${index + 1}.jpg`"
          alt=""
        />
        <div class="pd-info">
          <strong class="name">{{ product.name }}</strong>
          <p class="price">
            <span v-if="product.discount" class="discount">{{
              product.discount
            }}</span>
            <span class="sale">{{ product.price }} 원</span>
          </p>
        </div>
      </a>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
const products = [
  { name: "ACTION TECH DOWN COAT", price: "438,000", discount: null },
  { name: "CHALLENGE AIR DOWN COAT", price: "459,000", discount: null },
  { name: "M'S ASPEN TECH DOWN COAT", price: "431,200", discount: "20%" },
  { name: "MARTIS JACKET", price: "178,000", discount: null },
  { name: "MARTIS JACKET", price: "178,000", discount: null },
  { name: "MARTIS JACKET", price: "178,000", discount: null },
  { name: "MARTIS JACKET", price: "178,000", discount: null },
  { name: "MARTIS JACKET", price: "178,000", discount: null },
  { name: "MARTIS JACKET", price: "178,000", discount: null },
  { name: "MARTIS JACKET", price: "178,000", discount: null },
  { name: "MARTIS JACKET", price: "178,000", discount: null },
  { name: "MARTIS JACKET", price: "178,000", discount: null },
  { name: "MARTIS JACKET", price: "178,000", discount: null },
  { name: "MARTIS JACKET", price: "178,000", discount: null },
  { name: "MARTIS JACKET", price: "178,000", discount: null },
  { name: "MARTIS JACKET", price: "178,000", discount: null },
  { name: "MARTIS JACKET", price: "178,000", discount: null },
  { name: "MARTIS JACKET", price: "178,000", discount: null },
  { name: "MARTIS JACKET", price: "178,000", discount: null },
  { name: "MARTIS JACKET", price: "178,000", discount: null },
];
</script>

<style lang="scss" scoped>
.slide-product-list {
  margin: 2rem 0 0 0;
  padding: 0 0 0 2rem;
  .swiper-slide {
    a {
      display: block;
    }
    img {
      width: 100%;
    }
    .name {
      margin: 1.8rem 0 0.8em;
      font-size: 1.4rem;
      font-weight: 400;
      color: #000000;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      min-height: 2.5em;
      line-height: 1.2;
    }
    .price {
      font-size: 1.3rem;
      color: #141414;
      font-weight: 700;
      .discount {
        margin: 0 0.5rem 0 0;
        color: #e60023;
      }
    }
  }
}
</style>
