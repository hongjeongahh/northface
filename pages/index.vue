<template>
  <SlideVisual />
  <CircleMenu />
  <div class="content-box">
    <MainConSlide />
  </div>
  <div class="content-box">
    <h2 class="con-tit">New Arrivals</h2>
    <ProductList />
    <a href="javascript:void(0);" class="link-all">전체보기</a>
  </div>
  <div class="content-box">
    <MainCon :src="getImagePath('img-maincon')" title="dkdk" text="asdf" />
  </div>
</template>

<script setup>
const props = defineProps(["src", "title", "text"]);
const getImagePath = (imgName) => `/assets/images/common/${imgName}.jpg`;
</script>

<style lang="scss" scoped>
.content-box {
  position: relative;
  padding: 3rem 0;
}
.con-tit {
  font-size: 2.4rem;
  line-height: 2.4rem;
  margin: 0 0 2.5rem;
  color: #141414;
  padding: 0 2rem;
}
.link-all {
  display: block;
  position: absolute;
  right: 2rem;
  top: 3rem;
  font-size: 1.4rem;
  line-height: 2.4rem;
}
</style>
