<template>
  <div class="appbar">
    <ul>
      <li>
        <button type="button" class="appbar-item" @click="togglePopup('menu')">
          카테고리
        </button>
      </li>
      <li>
        <button
          type="button"
          class="appbar-item"
          @click="togglePopup('search')"
        >
          검색
        </button>
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
  <div class="layer-area">
    <div class="search-wrap">
      <transition name="slide-down">
        <div class="search-layer" v-if="isPopupVisible.search">
          <div class="search-area">
            <fieldset>
              <label for="search-input"><span class="hide">검색어</span></label>
              <input
                id="search-input"
                type="text"
                placeholder="검색어를 입력해주세요."
              />
            </fieldset>
          </div>
          <div class="layer-con popular-search">
            <strong class="tit">인기검색어</strong>
            <ul class="word-list">
              <li><a href="javascript:void(0);">눕시</a></li>
              <li><a href="javascript:void(0);">플리스</a></li>
              <li><a href="javascript:void(0);">숏눕시</a></li>
              <li><a href="javascript:void(0);">뮬</a></li>
              <li><a href="javascript:void(0);">맨투맨</a></li>
              <li><a href="javascript:void(0);">부띠</a></li>
              <li><a href="javascript:void(0);">등산화</a></li>
              <li><a href="javascript:void(0);">온라인단독</a></li>
              <li><a href="javascript:void(0);">백팩</a></li>
              <li><a href="javascript:void(0);">화이트라벨</a></li>
            </ul>
          </div>
          <div class="layer-con recent-search">
            <strong class="tit">최근 검색어</strong>
            <ul class="word-list">
              <li>
                <a href="javascript:void(0);">눕시</a>
                <button type="button">
                  <span class="hide">최근 검색어 삭제</span>
                </button>
              </li>
            </ul>
            <button type="button" class="btn-remove">전체삭제</button>
          </div>
          <div class="layer-con banner">
            <a href="javascript:void(0);">
              <img src="/assets/images/common/img-banner01.jpg" alt="" />
            </a>
          </div>
          <div class="layer-con banner">
            <a href="javascript:void(0);">
              <img src="/assets/images/common/img-banner02.jpg" alt="" />
            </a>
          </div>
          <button
            type="button"
            class="btn-close"
            @click="togglePopup('search')"
          >
            <span class="hide">검색 레이어 닫기</span>
          </button>
        </div>
      </transition>
      <div
        class="dimmed"
        :class="{ active: isPopupVisible.search }"
        @click="togglePopup('search')"
      ></div>
    </div>
    <div class="menu-wrap">
      <transition name="slide-left">
        <div class="menu-layer" v-if="isPopupVisible.menu">
          <div class="sign-area">
            <a href="javascript:void(0);" class="login">로그인</a>
            <a href="javascript:void(0);" class="signin">회원가입</a>
          </div>
          <ul class="menu-list">
            <li>
              <button type="button" class="depth1" @click="toggleActive">
                남성
              </button>
              <div class="depth2">
                <a href="javascript:void(0);">홈</a>
                <a href="javascript:void(0);">전체보기</a>
                <a href="javascript:void(0);">다운&패딩</a>
                <a href="javascript:void(0);">자켓&조끼</a>
                <a href="javascript:void(0);">티&셔츠</a>
                <a href="javascript:void(0);">바지</a>
                <a href="javascript:void(0);">윈터스포츠</a>
              </div>
            </li>
            <li>
              <button type="button" class="depth1" @click="toggleActive">
                여성
              </button>
              <div class="depth2">
                <a href="javascript:void(0);">홈</a>
                <a href="javascript:void(0);">전체보기</a>
                <a href="javascript:void(0);">다운&패딩</a>
                <a href="javascript:void(0);">자켓&조끼</a>
                <a href="javascript:void(0);">티&셔츠</a>
                <a href="javascript:void(0);">바지</a>
                <a href="javascript:void(0);">윈터스포츠</a>
              </div>
            </li>
            <li>
              <button type="button" class="depth1" @click="toggleActive">
                아동
              </button>
              <div class="depth2">
                <a href="javascript:void(0);">홈</a>
                <a href="javascript:void(0);">전체보기</a>
                <a href="javascript:void(0);">다운&패딩</a>
                <a href="javascript:void(0);">자켓&조끼</a>
                <a href="javascript:void(0);">티&셔츠</a>
                <a href="javascript:void(0);">바지</a>
                <a href="javascript:void(0);">윈터스포츠</a>
              </div>
            </li>
            <li>
              <button type="button" class="depth1" @click="toggleActive">
                화이트라벨
              </button>
              <div class="depth2">
                <a href="javascript:void(0);">홈</a>
                <a href="javascript:void(0);">전체보기</a>
                <a href="javascript:void(0);">다운&패딩</a>
                <a href="javascript:void(0);">자켓&조끼</a>
                <a href="javascript:void(0);">티&셔츠</a>
                <a href="javascript:void(0);">바지</a>
                <a href="javascript:void(0);">윈터스포츠</a>
              </div>
            </li>
            <li>
              <button type="button" class="depth1" @click="toggleActive">
                가방&용품
              </button>
              <div class="depth2">
                <a href="javascript:void(0);">홈</a>
                <a href="javascript:void(0);">전체보기</a>
                <a href="javascript:void(0);">가방</a>
                <a href="javascript:void(0);">액세서리</a>
                <a href="javascript:void(0);">캠핑</a>
                <a href="javascript:void(0);">아동</a>
              </div>
            </li>
            <li>
              <button type="button" class="depth1" @click="toggleActive">
                신발
              </button>
              <div class="depth2">
                <a href="javascript:void(0);">홈</a>
                <a href="javascript:void(0);">전체보기</a>
                <a href="javascript:void(0);">스포츠</a>
                <a href="javascript:void(0);">라이프스타일</a>
                <a href="javascript:void(0);">계절신발</a>
                <a href="javascript:void(0);">아동</a>
              </div>
            </li>
            <li>
              <a href="javascript:void(0);" class="depth1 only">랭킹</a>
            </li>
          </ul>
          <ul class="banner-menu-list">
            <li>
              <a href="javascript:void(0);">
                <img
                  src="/assets/images/common/img-gnb-banner01.jpg"
                  alt="PHOTO BOOK"
                />
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <img
                  src="/assets/images/common/img-gnb-banner02.jpg"
                  alt="MEDIA"
                />
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <img
                  src="/assets/images/common/img-gnb-banner03.jpg"
                  alt="CATALOG"
                />
              </a>
            </li>
          </ul>
          <ul class="account-link">
            <li>
              <a href="javascript:void(0);" class="order">주문배송</a>
            </li>
            <li>
              <a href="javascript:void(0);" class="notice">공지사항</a>
            </li>
            <li>
              <a href="javascript:void(0);" class="cs">고객센터</a>
            </li>
            <li>
              <a href="javascript:void(0);" class="store">매장찾기</a>
            </li>
          </ul>
          <button type="button" class="btn-close" @click="togglePopup('menu')">
            <span class="hide">전체메뉴 레이어 닫기</span>
          </button>
        </div>
      </transition>
      <div
        class="dimmed"
        :class="{ active: isPopupVisible.menu }"
        @click="togglePopup('menu')"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isPopupVisible = ref({
  search: false,
  menu: false,
});

const togglePopup = (popup) => {
  isPopupVisible.value[popup] = !isPopupVisible.value[popup];
};
</script>

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
  > ul {
    display: flex;
    justify-content: space-between;
    > li {
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
.layer-area {
  display: flex;
  .btn-search,
  .btn-menu {
    width: 3.2rem;
    height: 3.2rem;
    background: rgba(255, 0, 0, 0.3);
  }

  .dimmed {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    &.active {
      display: block;
    }
  }
  .menu-wrap {
    .dimmed {
      z-index: 25;
    }
  }
}
.search-layer {
  padding: 0 1.6rem 3.6rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  background: #ffffff;
  &.slide-down-enter-active,
  &.slide-down-leave-active {
    transition: all 0.5s;
  }
  &.slide-down-enter-to,
  &.slide-down-leave-from {
    transform: translateY(0);
  }
  &.slide-down-enter-from,
  &.slide-down-leave-to {
    transform: translateY(-100%);
  }

  input {
    padding: 1.5rem 2rem 1rem 3.5rem;
    width: 100%;
    height: 5.8rem;
    border-bottom: 1px solid #141414;
    font-size: 1.4rem;
    line-height: 3.2rem;
    &::placeholder {
      font-size: 1.4rem;
    }
  }
  .layer-con {
    position: relative;
    padding: 1rem 1.6rem 1.3rem;
    .tit {
      display: block;
      font-size: 1.2rem;
      line-height: 2.4;
      color: #9e9e9e;
    }
    .word-list {
      display: flex;
      flex-wrap: wrap;
      margin: 0.9rem 0 0;
      li {
        width: 50%;
        font-size: 1.2rem;
        a {
          display: block;
          line-height: 3rem;
        }
        &:nth-of-type(2n) {
          a {
            padding: 0 0 0 0.8rem;
          }
        }
      }
    }
    .btn-remove {
      position: absolute;
      right: 1.6rem;
      top: 1rem;
      font-size: 1.2rem;
      line-height: 2.4;
      color: #141414;
      text-decoration: underline;
    }
    &.banner {
      margin: 1rem 0 0;
      padding: 0;
      &:nth-of-type(1) {
        margin: 0;
      }
      img {
        width: 100%;
      }
    }
  }
  .btn-close {
    position: absolute;
    right: 1.6rem;
    top: 1.8rem;
    width: 2rem;
    height: 2rem;
    &::before {
      content: "";
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      width: 0.1rem;
      height: 1.3rem;
      background: #000000;
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      width: 0.1rem;
      height: 1.3rem;
      background: #000000;
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
}
.menu-layer {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 30;
  width: 80%;
  height: 100%;
  background: #ffffff;
  overflow-y: auto;
  &.slide-left-enter-active,
  &.slide-left-leave-active {
    transition: all 0.5s;
  }
  &.slide-left-enter-to,
  &.slide-left-leave-from {
    // transform: translateX(0);
    right: 0;
  }
  &.slide-left-enter-from,
  &.slide-left-leave-to {
    // transform: translateX(-100%);
    right: -100%;
  }
  .sign-area {
    display: flex;
    gap: 3rem;
    padding: 2rem 1.6rem 1rem;
    a {
      display: block;
      position: relative;
      padding: 0 0 0 2rem;
      font-size: 1.6rem;
      font-weight: 700;
      &::before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 1.7rem;
        height: 1.7rem;
        background: rgba(255, 0, 0, 0.3);
      }
    }
  }
  .menu-list {
    li {
      .depth1 {
        display: block;
        width: 100%;
        border-bottom: 1px solid #e5e5e5;
        position: relative;
        padding: 1.6rem 4.4rem 1.6rem 1.6rem;
        font-size: 1.5rem;
        font-weight: 700;
        text-align: left;
        color: #141414;
        line-height: 2.1rem;
        &::before {
          content: "";
          display: block;
          position: absolute;
          right: 1.6rem;
          top: 50%;
          width: 1.2rem;
          height: 0.1rem;
          background: #141414;
        }
        &::after {
          content: "";
          display: block;
          position: absolute;
          right: 1.6rem;
          top: 50%;
          width: 1.2rem;
          height: 0.1rem;
          background: #141414;
          transform: rotate(90deg);
        }
        &.only {
          &::before,
          &::after {
            display: none;
          }
        }
      }
      .depth2 {
        display: none;
        border-top: 1px solid #e5e5e5;
        a {
          display: block;
          padding: 0 1.6rem;
          font-size: 1.3rem;
          line-height: 3.8rem;
          border-bottom: 1px solid #e5e5e5;
        }
      }

      .active {
        border-bottom: none;
        + .depth2 {
          display: block;
        }
        &::after {
          display: none;
        }
      }
    }
  }
  .banner-menu-list {
    display: flex;
    gap: 1rem;
    padding: 1.5rem 0 2.5rem 1.5rem;
    overflow-x: auto;
    a {
      display: block;
    }
    img {
      width: auto;
      height: 40vw;
    }
  }
  .account-link {
    display: flex;
    justify-content: space-between;
    margin: 1.4rem 0 0;
    padding: 0 1.6rem 1.6rem;
    a {
      display: block;
      font-size: 1.1rem;
      &::before {
        content: "";
        display: block;
        margin: 0 auto 1.8rem;
        width: 2.4rem;
        height: 2.4rem;
        background: rgba(255, 0, 0, 0.3);
      }
    }
  }
  .btn-close {
    padding: 0.6rem;
    position: absolute;
    right: 0.3rem;
    top: 1.5rem;
    width: 3.7rem;
    height: 3.7rem;
    &::before {
      content: "";
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      width: 0.1rem;
      height: 1.6rem;
      background: #000000;
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      width: 0.1rem;
      height: 1.6rem;
      background: #000000;
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
}
</style>
