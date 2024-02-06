<template>
  <main>
    <SlideVisual />
    <CircleMenu />
    <div class="content-box">
      <MainConSlide />
    </div>
    <div class="content-box">
      <div class="tit-area">
        <h2 class="con-tit">New Arrivals</h2>
      </div>
      <ProductList1 />
      <a href="javascript:void(0);" class="link-all">전체보기</a>
    </div>
    <div class="content-box">
      <MainCon
        :src="getImagePath('img-maincon01')"
        title="가볍지만 강하다
        쉴드 100팩"
        text="미리 준비하는 키즈 신학기 백팩 UP TO 10%"
      />
    </div>
    <div class="content-box">
      <MainCon
        :src="getImagePath('img-maincon02')"
        title="NEW KIDS
        BACKPACK"
        text="친구들과의 차별화된 스타일로 나만의 가방을 찾아보세요!"
      />
    </div>
    <div class="content-box">
      <MainCon
        :src="getImagePath('img-maincon03')"
        title="신학기 가방
        SUPER PACK II"
        text="스타일과 기능의 완벽한 조합"
      />
    </div>
    <div class="content-box">
      <MainCon
        :src="getImagePath('img-maincon04')"
        title="ONLINE
        EXCLUSIVE"
        text="온라인과 앱에서만 만날 수 있는 단독 혜택"
      />
    </div>
    <div class="content-box">
      <SnsArea />
    </div>
    <div class="content-box">
      <div class="tit-area">
        <h2 class="con-tit">겨울을<br />더 따뜻하게, 더 스타일리쉬하게</h2>
        <p class="sub-txt">포근하게 완성하는 롱다운 스타일을 만나보세요</p>
      </div>
      <MainCon :src="getImagePath('img-maincon05')" />
      <ProductList2 />
    </div>
    <div class="content-box">
      <MainCon
        :src="getImagePath('img-maincon06')"
        title="NUPTSE
        방수를 더하다"
        text="올 겨울 한층 더 업그레이드 된 눕시를 만나보자"
      />
    </div>
    <div class="content-box">
      <MainCon
        :src="getImagePath('img-maincon07')"
        title="핏으로 표현하는
        프리미엄 다운"
        text="겨울바람을 우아하게 다스려줄 마라나 다운"
      />
    </div>
    <div class="content-box">
      <div class="tit-area">
        <h2 class="con-tit">STAFF GALLERY</h2>
      </div>
      <StaffGallery />
      <a href="javascript:void(0);" class="link-all">전체보기</a>
    </div>
  </main>
</template>

<script setup>
const getImagePath = (imgName) => `/assets/images/common/${imgName}.jpg`;
</script>

<style lang="scss" scoped>
main {
  padding: 0 0 6rem;
}
.content-box {
  position: relative;
  padding: 3rem 0;
  img {
    width: 100%;
  }
}
.tit-area {
  margin: 0 0 2.5rem;
  padding: 0 2rem;
}
.con-tit {
  font-size: 2.4rem;
  line-height: 2.4rem;
  color: #141414;
  word-break: break-all;
}
.sub-txt {
  font-size: 1.3rem;
  line-height: 3rem;
  color: #666666;
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
