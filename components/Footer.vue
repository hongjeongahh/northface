<template>
  <footer>
    <div class="area1">
      <ul class="accordion-wrap">
        <li>
          <button type="button" class="accordion-btn" @click="accordionToggle">
            ABOUT US
          </button>
          <div class="accordion-con">
            <a href="javascipt:void(0);">브랜드스토리</a>
            <a href="javascipt:void(0);">VISION</a>
            <a href="javascipt:void(0);">TEAM</a>
            <a href="javascipt:void(0);">테크놀러지</a>
            <a href="javascipt:void(0);">웹카탈로그</a>
            <a href="javascipt:void(0);">미디어</a>
            <a href="javascipt:void(0);">항저우 아시안게임 포토북</a>
          </div>
        </li>
        <li>
          <button type="button" class="accordion-btn" @click="accordionToggle">
            HELP
          </button>
          <div class="accordion-con">
            <a href="javascipt:void(0);">고객지원실</a>
            <a href="javascipt:void(0);">FAQ</a>
            <a href="javascipt:void(0);">문의하기</a>
            <a href="javascipt:void(0);">A/S안내</a>
            <a href="javascipt:void(0);">이용약관</a>
            <a href="javascipt:void(0);">멤버십 혜택</a>
          </div>
        </li>
        <li>
          <button type="button" class="accordion-btn" @click="accordionToggle">
            FAMILY
          </button>
          <div class="accordion-con">
            <a href="javascipt:void(0);">영원아웃도어</a>
            <a href="javascipt:void(0);">화이트라벨</a>
            <a href="javascipt:void(0);">아웃도어 리서치</a>
          </div>
        </li>
      </ul>
    </div>
    <div class="area2">
      <a href="javascipt:void(0);" class="find-store">매장찾기</a>
      <div class="btn-area">
        <button type="button" class="sns blog1">
          <span class="hide">OFFICIAL BLOG</span>
        </button>
        <button type="button" class="sns blog2">
          <span class="hide">EDITION BLOG</span>
        </button>
        <button type="button" class="sns facebook">
          <span class="hide">facebook</span>
        </button>
        <button type="button" class="sns instagram">
          <span class="hide">instagram</span>
        </button>
        <button type="button" class="sns youtube">
          <span class="hide">youtube</span>
        </button>
      </div>
    </div>
    <div class="area3">
      <strong class="company-name">㈜영원아웃도어</strong>
      <div class="company-info1">
        <div>
          <span>대표이사 성기학</span>
          <span>[개인정보 보호책임자] 최윤정 상무</span>
          <span>사업자등록번호 110-81-27101</span>
        </div>
        <p>통신판매업 신고번호: 2013-경기성남-0984</p>
        <p>주소: 경기도 성남시 중원구 사기막골로 169</p>
        <p>반송지 주소 : 경기도 이천시 마장면 프리미엄 아울렛로 33-20</p>
      </div>
      <div class="company-info2">
        <div class="txt">
          <p>
            온라인몰 고객지원실 :
            <a link-type="tel" href="tel:16613512">1661-3512</a>
          </p>
          <p>
            매장고객 및 A/S문의 :
            <a link-type="tel" href="tel:18992626">1899-2626</a>
          </p>
        </div>
        <div class="mark">
          <a class="inicis" href="javascipt:void(0);"
            ><span class="hide"
              >클릭하시면 이니시스 결제시스템의 유효성을 확인하실 수
              있습니다.</span
            ></a
          >
          <a class="iso" href="javascipt:void(0);"
            ><span class="hide">ISO 인증 이미지</span></a
          >
        </div>
      </div>
      <div class="company-mark">
        <div class="mark">
          <a class="isms" href="javascipt:void(0);"
            ><span class="hide">isms 인증 이미지</span></a
          >
        </div>
        <p>
          [인증범위] 온라인쇼핑몰(노스페이스, 영원아웃도어)<br />
          및 TNF100 홈페이지<br />
          [유효기간] 2022.09.21 ~ 2025.09.20
        </p>
      </div>
      <div class="company-link">
        <a href="javascript:void(0);">사업자정보확인</a>
        <a href="javascript:void(0);"><strong>개인정보처리방침</strong></a>
        <a href="javascript:void(0);">이용약관</a>
      </div>
      <p class="copy">Youngone Outdoor Co. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script setup>
// 푸터 아코디언
function accordionToggle(e) {
  const accordionCon = document.querySelectorAll(".accordion-con");
  const thisCon = e.target.nextElementSibling;
  let a;

  accordionCon.forEach((item) => {
    item.style.height = 0;
  });

  0 === thisCon.offsetHeight
    ? ((thisCon.style.height = "auto"),
      (a = thisCon.offsetHeight),
      (thisCon.style.height = 0),
      void thisCon.offsetHeight,
      (thisCon.style.height = `${a}px`))
    : (thisCon.style.height = 0);
}
</script>

<style lang="scss" scoped>
footer {
  min-width: 32rem;
  width: 100%;
  .area2 {
    padding: 1.5rem;
  }
  .area3 {
    padding: 30px 0 80px;
    font-size: 1rem;
    line-height: 1.7rem;
    text-align: center;
    color: #9b9b9b;
    background: #000000;
    .company {
      &-name {
        font-size: 1.4rem;
        color: #ffffff;
      }
      &-info1 {
        margin: 1.4rem 0 0;
        span {
          margin: 0 0 0 1rem;
        }
        p {
        }
      }
      &-info2 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1.6rem 0 0;
        .txt {
          font-size: 1.2rem;
          color: #ffffff;
        }
        .mark {
          display: flex;
          gap: 0.5rem;
          margin: 0 0 0 1rem;
          a {
            display: inline-block;
            width: 3rem;
            height: 3rem;
            vertical-align: middle;
          }
          .inicis {
            background: url("/assets/images/common/inicis.png");
            background-size: 3rem;
          }
          .iso {
            background: url("/assets/images/common/iso.png");
            background-size: 3rem;
          }
        }
      }
      &-mark {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin: 1.6rem 0 0;
        text-align: left;
        .isms {
          display: inline-block;
          width: 5rem;
          height: 5rem;
          background: url("/assets/images/common/isms.png");
          background-size: 5rem;
        }
      }
      &-link {
        margin: 1.5rem 0 0;
        a {
          margin: 0 0 0 1rem;
          padding: 0 0 0 1rem;
          position: relative;
          font-size: 1.2rem;
          color: #ffffff;
          &::before {
            content: "";
            display: block;
            position: absolute;
            left: 0;
            top: 0.3rem;
            width: 0.1rem;
            height: 1.3rem;
            background: #ffffff;
          }
          &:nth-of-type(1) {
            margin: 0;
            padding: 0;
            &::before {
              display: none;
            }
          }
        }
      }
    }
    .copy {
      margin: 1.5rem 0 0;
      font-size: 0.9rem;
    }
  }
}
.find-store {
  display: block;
  width: 100%;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 5rem;
  text-align: center;
  color: #ffffff;
  background: #141414;
}
.btn-area {
  display: flex;
  justify-content: space-between;
  margin: 1.5rem auto 0;
  width: 26rem;
  .sns {
    width: 2.7rem;
    height: 2.7rem;
    background: rgba(255, 0, 0, 0.3);
  }
}
.accordion-wrap {
  border-bottom: 1px solid #c4c4c4;
  li {
    border-top: 1px solid #c4c4c4;
    .accordion-btn {
      position: relative;
      width: 100%;
      padding: 0 2.5rem;
      font-size: 1.4rem;
      line-height: 5rem;
      text-align: left;
      &::after {
        content: "";
        display: block;
        position: absolute;
        right: 2.5rem;
        top: 50%;
        transform: translateY(-50%) rotate(135deg);
        width: 8px;
        height: 8px;
        border-top: 2px solid #333333;
        border-right: 2px solid #333333;
      }
    }
    .accordion-con {
      height: 0;
      overflow: hidden;
      transition: 0.3s;
      a {
        display: block;
        width: 100%;
        border-top: 1px solid #e5e5e5;
        padding: 0 2.5rem;
        font-size: 1.2rem;
        line-height: 4.3rem;
      }
      &.active {
        height: 100%;
      }
    }
  }
}
</style>
