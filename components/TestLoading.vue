<template>
  <main>
    <p class="loadingTitle">결과 로딩중</p>
    <img src="../assets/image/lodingLogo.png" alt="결과로딩 이미지" />
    <p class="loadingText">당신은 오징어게임에서...</p>
  </main>
</template>

<script>
export default {
  name: "TestLoading",
};
</script>

<style scoped>
main {
  margin-top: 120px;
}
.loadingTitle {
  width: 86px;
  font-weight: 700;
  font-size: 18px;
  margin-right: auto;
  margin-left: auto;
}
img {
  margin-bottom: 40px;
}
.loadingText {
  width: 140px;
  font-weight: 400;
  font-size: 14px;
  margin-right: auto;
  margin-left: auto;
}
</style>
