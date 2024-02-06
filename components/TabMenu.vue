<template>
  <div class="tab-menu">
    <ul>
      <li>
        <a href="javascript:void(0);">남성</a>
      </li>
      <li>
        <a href="javascript:void(0);">여성</a>
      </li>
      <li>
        <a href="javascript:void(0);">아동</a>
      </li>
      <li>
        <a href="javascript:void(0);">가방&용품</a>
      </li>
      <li>
        <a href="javascript:void(0);">신발</a>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.tab-menu {
  position: sticky;
  // left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  background: #ffffff;
  ul {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;
    padding: 0 1.6rem;
    overflow-x: auto;
    li {
      flex: 0 0 auto;
    }
    a {
      display: block;
      padding: 0 1rem;
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 4.6rem;
    }
  }
}
</style>
