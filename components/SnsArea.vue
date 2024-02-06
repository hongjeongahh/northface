<template>
    <div class="sns-area">
      <a v-for="(image, index) in snsImages" :key="index" :href="`javascript:void(0);`">
        <img :src="image.src" :alt="image.alt">
      </a>
    </div>
  </template>

<script setup>
const snsImages = [
  { src: '/assets/images/common/img-sns1.jpg', alt: '' },
  { src: '/assets/images/common/img-sns2.jpg', alt: '' },
  { src: '/assets/images/common/img-sns3.jpg', alt: '' },
  { src: '/assets/images/common/img-sns4.jpg', alt: '' },
];
</script>

<style lang="scss" scoped>
.sns-area {
    display: flex;
    flex-wrap: wrap;
    a {
        width: 50%;
        img {
            width: 100%;
        }
    }
}
</style>