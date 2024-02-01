<template>
  <header>
    <h1 class="logo">
      <a href="javascript:void(0);"><span class="hide">THE NORTH FACE</span></a>
    </h1>
    <div class="layer-area">
      <div class="search-wrap">
        <button type="button" class="btn-search" @click="openSearchLayer">
          <span class="hide">검색 레이어 열기</span>
        </button>
        <div class="search-layer">
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
              <img src="/assets/images/common/img_banner01.jpg" alt="" />
            </a>
          </div>
          <div class="layer-con banner">
            <a href="javascript:void(0);">
              <img src="/assets/images/common/img_banner02.jpg" alt="" />
            </a>
          </div>
          <button type="button" class="btn-close" @click="closeSearchLayer">
            <span class="hide">검색 레이어 닫기</span>
          </button>
        </div>
        <div class="overlay" @click="closeSearchLayer"></div>
      </div>
      <div class="menu-wrap">
        <button type="button" class="btn-menu" @click="openMenuLayer">
          <span class="hide">전체메뉴 레이어 열기</span>
        </button>
        <div class="menu-layer">
          <div class="sign-area">
            <a href="javascript:void(0);">로그인</a>
            <a href="javascript:void(0);">회원가입</a>
          </div>
          <ul class="menu-list">
            <li>
              <a href="javascript:void(0);">남성</a>
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
              <a href="javascript:void(0);">여성</a>
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
              <a href="javascript:void(0);">아동</a>
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
              <a href="javascript:void(0);">화이트라벨</a>
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
              <a href="javascript:void(0);">가방&용품</a>
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
              <a href="javascript:void(0);">신발</a>
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
              <a href="javascript:void(0);">랭킹</a>
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
              <a href="javascript:void(0);">주문배송</a>
            </li>
            <li>
              <a href="javascript:void(0);">공지사항</a>
            </li>
            <li>
              <a href="javascript:void(0);">고객센터</a>
            </li>
            <li>
              <a href="javascript:void(0);">매장찾기</a>
            </li>
          </ul>
          <button type="button" class="btn-close" @click="closeMenuLayer">
            <span class="hide">전체메뉴 레이어 닫기</span>
          </button>
        </div>
        <div class="overlay" @click="closeMenuLayer"></div>
      </div>
    </div>
  </header>
</template>

<script setup>
// 레이어 메뉴 열기 & 닫기
function openSearchLayer() {
  const layer = document.querySelector(".search-layer");
  layer.classList.add("active");
}
function closeSearchLayer() {
  const layer = document.querySelector(".search-layer");
  layer.classList.remove("active");
}
function openMenuLayer() {
  const layer = document.querySelector(".menu-layer");
  layer.classList.add("active");
}
function closeMenuLayer() {
  const layer = document.querySelector(".menu-layer");
  layer.classList.remove("active");
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 32rem;
  height: 6.2rem;
  padding: 0 1.6rem;
  .logo {
    width: 7rem;
    height: 3.3rem;
    a {
      display: block;
      width: 100%;
      height: 100%;
      background: url("/assets/images/logo.svg") no-repeat center;
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

    .overlay {
      display: none;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 10;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
    }

    .search-layer {
      padding: 0 1.6rem 3.6rem;
      position: fixed;
      top: -100%;
      left: 0;
      z-index: 20;
      width: 100%;
      background: #ffffff;
      transition: top 0.4s;

      &.active {
        top: 0;
        + .overlay {
          display: block;
        }
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
      right: -100%;
      z-index: 20;
      width: 80%;
      min-height: 100%;
      background: #ffffff;
      overflow-y: auto;
      transition: 0.4s;
      &.active {
        right: 0;
        + .overlay {
          display: block;
        }
      }
      .sign-area {
        padding: 2rem 1.6rem 1rem;
      }
      .menu-list {
        li {
          border-bottom: 1px solid #e5e5e5;
          a {
            display: block;
            padding: 1.6rem 4.4rem 1.6rem 1.6rem;
            font-size: 1.5rem;
            font-weight: 700;
            color: #141414;
            line-height: 2.2rem;
          }
        }
        .depth2 {
          display: none;
        }
      }
      .banner-menu-list {
        padding: 1.5rem 0 2.5rem 1.5rem;
      }
    }
  }
}
</style>
