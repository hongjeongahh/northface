<template>
  <div class="img-product">
    <img :src="src" alt="" />
    <div class="box">
      <strong>{{ title }}</strong>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["src", "title", "text"]);
</script>

<style lang="scss" scoped>
.img-product {
  img {
    width: 100%;
  }
}
</style>
