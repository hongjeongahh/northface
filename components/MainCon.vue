<template>
  <div class="img-product">
    <a href="javascript:void(0);">
      <img :src="src" alt="" />
      <div class="item" v-if="(title, text)">
        <strong class="item-tit">{{ title }}</strong>
        <p class="item-txt">{{ text }}</p>
      </div>
    </a>
  </div>
</template>

<script setup>
const props = defineProps(["src", "title", "text"]);
</script>

<style lang="scss" scoped>
.img-product {
  a {
    display: block;
  }
  img {
    width: 100%;
  }
  .item {
    padding: 2rem 2rem 0;
  }
  .item-tit {
    display: block;
    font-size: 3rem;
    line-height: 1.1;
    white-space: pre-line;
  }
  .item-txt {
    font-size: 1.4rem;
    line-height: 1.3;
    margin: 1rem 0 0;
  }
}
</style>
