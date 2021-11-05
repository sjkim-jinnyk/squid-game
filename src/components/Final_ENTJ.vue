<template>
  <div class="Final_MBTI">
    <div class="testMBTI">
      <p class="mbti">ENTJ</p>
      <p class="charName">조상우</p>
      <img src="../img/조상우_ENTJ.png" alt="성기훈 이미지" class="mbtiIMG" />
      <p class="mbtiSummary">풍부한 열정과 상상력으로 무엇이든 해내는 인물</p>
    </div>
    <main>
      <section class="mbtiInfo">
        <p class="mbtiInfo_summary">MBTI에 가장 알맞는 한줄설명</p>
        <p class="mbtiInfo_text">
          다소 내향적이고 합리적이며 이성적인 판단을 잘 한다. 독립적인 성격이 강해 많은 사람들과
          있는 거 보디 혼자 만의 시간을 즐기는 편이다. 주변 사람들에게는 친절하지만 사생활을
          중시하는 성격이다. 어떠한 상황에도 실리를 챙긴다. 팀워크가 필요할 때 전력가로서 빛을
          발한다. 비효율적이거나 확실치 않은 상황을 싫어한다. 사전 준비가 철저하고 계획적이다. 일을
          할 때 논리적이고 분석적이다.
        </p>
      </section>
      <section class="mbtiInfo2">
        <p class="mbtiInfo2_summary">MBTI에 맞는 드라마 속 모습들</p>
        <p class="mbtiInfo2_text">
          드라마 내에서 서울대 경영학과 수석 입학 출신으로 똑똑하고 능력이 있지만 산더미 같은 빚에
          허덕이며 살고 있으며, 회사 돈을 횡령한 죄로 범죄자 신세다. 빚이 쌓여서 막막한 상황에
          놓여있을 때도 주변의 조언과 도움을 요청하기 보다 혼자서 고민하고 해결하려는 모습을
          보여준다. 다리게임에서 앞사람을 밀고 강새벽을 잔인하게 죽이고 구슬게임에서 알리압둘을
          속이듯이 어떤 상황에서도 사람과 감정보다 실리와 효율적인 선택을 한다. 게임 도중에 팀워크가
          필요할 때는 직접 나서서 전략가로서 빛을 발하기도 한다.
        </p>
      </section>
      <section class="typeMatch">
        <p class="title">유형별 궁합</p>
        <div class="GoodBad">
          <section class="typeGood">
            <p class="typeTitle">GOOD</p>
            <img src="../img/강새벽_INFP.png" alt="ENFP와 잘맞는 유형" />
            <p class="typeCharName">장새벽</p>
            <p class="typeCharInfo">창의력과 통찰력이 뛰어난 독창적인 인물</p>
          </section>
          <section class="typeBad">
            <p class="typeTitle">BAD</p>
            <img src="../img/병기_ISFJ.png" alt="ENFP와 잘맞는 유형" />
            <p class="typeCharName">병기</p>
            <p class="typeCharInfo">전략가로서 실리를 챙기는 지도자형 인물</p>
          </section>
        </div>
      </section>
    </main>
    <footer>
      <p class="share_box">공유하기</p>
      <div class="share_btn">
        <img src="image/share_btn.svg" />
        <img src="image/kakao.svg" />
        <img src="image/facebook.svg" />
        <img src="image/twitter.svg" />
      </div>
      <div class="footerBTN">
        <button class="allResultBTN">결과 전체보기</button>
        <button class="testRestart">테스트다시하기</button>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Final_ENFP",
};
</script>

<style scoped>
@import "../css/Final_MBTI.css";
</style>
