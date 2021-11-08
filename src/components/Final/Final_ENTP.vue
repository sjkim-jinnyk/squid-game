<template>
  <div class="Final_MBTI">
    <div class="testMBTI">
      <p class="mbti">ENTP</p>
      <p class="charName">의문의 남자</p>
      <img src="../../img/MBTI/의문남_ENTP.png" alt="의문남 이미지" class="mbtiIMG" />
      <p class="mbtiSummary">자신감과 에너지가 넘치는 혁신적인 인물</p>
    </div>
    <main>
      <section class="mbtiInfo">
        <p class="mbtiInfo_summary">MBTI에 가장 알맞는 한줄설명</p>
        <p class="mbtiInfo_text">
          독창적인 혁신가이여 창의력이 풍부해서 새로운 시도를 즐기는 성격이다. 다방면에 재능이 있고
          자신감과 에너지가 넘친다. 다른 사람을 판단하기보다 이해하려고 노력한다. 감정에 솔직하고
          표현을 잘한다. 경쟁심이 강해서 토론이나 논쟁을 좋아한다. 자존감이 높고 자신에 대한 확신이
          강하다.
        </p>
      </section>
      <section class="mbtiInfo2">
        <p class="mbtiInfo2_summary">MBTI에 맞는 드라마 속 모습들</p>
        <p class="mbtiInfo2_text">
          오징어 게임 참가자들과 딱지치기를 하여 10만원 내기를 하는 인물로서 자신감과 에너지가
          넘친다. 경쟁심이 강해서 성기훈과의 딱지치기에서도 연속적으로 승리한다.
        </p>
      </section>
      <section class="typeMatch">
        <p class="title">유형별 궁합</p>
        <div class="GoodBad">
          <section class="typeGood">
            <p class="typeTitle">GOOD</p>
            <img src="../../img/MBTI/병기_ISFJ.png" alt="ENTP와 잘맞는 유형" />
            <p class="typeCharName">병기</p>
            <p class="typeCharInfo">책임강이 강하고 헌신적인 인내심 많은 인물</p>
          </section>
          <section class="typeBad">
            <p class="typeTitle">BAD</p>
            <img src="../../img/MBTI/지영_ISFP.png" alt="ENTP와 잘맞는 유형" />
            <p class="typeCharName">지영</p>
            <p class="typeCharInfo">감수성이 풍부하고 독립심이 많은 인물</p>
          </section>
        </div>
      </section>
    </main>
    <footer>
      <p class="share_box">공유하기</p>
      <div class="share_btn">
        <img src="/image/share_btn.svg" />
        <img src="/image/kakao.svg" />
        <img src="/image/facebook.svg" />
        <img src="/image/twitter.svg" />
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
@import "../../css/Final_MBTI.css";
</style>
