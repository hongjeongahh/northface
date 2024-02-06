<template>
  <div class="circle-menu">
    <ul>
      <li>
        <a href="javascript:void(0);">
          <img src="/assets/images/common/img-category01.png" alt="" />
          <span>아웃도어</span>
        </a>
      </li>
      <li>
        <a href="javascript:void(0);">
          <img src="/assets/images/common/img-category02.png" alt="" />
          <span>화이트라벨</span>
        </a>
      </li>
      <li>
        <a href="javascript:void(0);">
          <img src="/assets/images/common/img-category03.png" alt="" />
          <span>키즈</span>
        </a>
      </li>
      <li>
        <a href="javascript:void(0);">
          <img src="/assets/images/common/img-category04.png" alt="" />
          <span>랭킹</span>
        </a>
      </li>
      <li>
        <a href="javascript:void(0);">
          <img src="/assets/images/common/img-category05.png" alt="" />
          <span>스텝갤러리</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.circle-menu {
  padding: 2rem 1rem 3rem;
  ul {
    display: flex;
    justify-content: space-between;
    li {
      width: 20%;
      text-align: center;
      a {
        display: block;
      }
      img {
        max-width: 5.6rem;
      }
    }
    span {
      display: block;
      padding: 2rem 0 0;
      font-size: 1.4rem;
      line-height: 1.2;
      text-align: center;
      color: #141414;
      word-break: break-all;
    }
  }
}
</style>
