<template>
  <div class="appbar">
    <ul>
      <li>
        <button type="button" class="appbar-item">카테고리</button>
      </li>
      <li>
        <button type="button" class="appbar-item">검색</button>
      </li>
      <li>
        <a href="javascript:void(0);" class="appbar-item">홈</a>
      </li>
      <li>
        <a href="javascript:void(0);" class="appbar-item">장바구니</a>
      </li>
      <li>
        <a href="javascript:void(0);" class="appbar-item">마이</a>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.appbar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 15;
  background: #ffffff;
  padding: 0.8rem 0;
  border-top: 1px solid #e5e5e5;
  ul {
    display: flex;
    justify-content: space-between;
    li {
      width: 20%;
    }
  }
  .appbar-item {
    display: block;
    width: 100%;
    font-size: 1.1rem;
    text-align: center;
    &::before {
      content: "";
      display: block;
      width: 2.2rem;
      height: 2.2rem;
    }
  }
}
</style>
