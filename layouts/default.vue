<template>
  <div id="wrap">
    <div class="top-area">
      <HeaderBanner />
      <Header :togglePopup="togglePopup" :isPopupVisible="isPopupVisible" />
      <TabMenu />
    </div>
    <main>
      <slot />
    </main>
    <Footer />
    <Appbar :togglePopup="togglePopup" :isPopupVisible="isPopupVisible" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#wrap {
  .top-area {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 20;
    transition: top 0.3s;
  }
  main {
    margin: 14.8rem 0 0;
    padding: 0 0 6rem;
  }

  &.scroll-active {
    .top-area {
      top: -10.2rem;
    }
  }
  &.scroll-active-nobanner {
    .top-area {
      top: -6.2rem;
    }
  }
}
</style>
