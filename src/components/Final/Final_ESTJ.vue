<template>
  <div class="Final_MBTI">
    <div class="testMBTI">
      <p class="mbti">ESTJ</p>
      <p class="charName">VIPS</p>
      <img src="../../img/MBTI/VIP_ESTJ.png" alt="VIP 이미지" class="mbtiIMG" />
      <p class="mbtiSummary">계획하는 능력이 뛰어난 사업가형 인물</p>
    </div>
    <main>
      <section class="mbtiInfo">
        <p class="mbtiInfo_summary">MBTI에 가장 알맞는 한줄설명</p>
        <p class="mbtiInfo_text">
          일을 구체적으로 조직하고 계획하는 능력이 뛰어나다. 체계적이고 조직화된 시스템 속에서
          결단력 있는 행동을 보인다. 현실적이고 논리적으로 사업이나 조직을 이끌어 나가는 재능을
          가졌다. 분명한 규칙을 중요시하고 그에 따라 행동하고 일을 추진한다. 주변사람들에게 잔소리를
          많이 한다 지나치게 일 중심적인 성격이 강하다.
        </p>
      </section>
      <section class="mbtiInfo2">
        <p class="mbtiInfo2_summary">MBTI에 맞는 드라마 속 모습들</p>
        <p class="mbtiInfo2_text">
          오징어 게임을 관전하기 위해서 천문학적인 돈을 내는 외국인들. 힘들고 물러날 곳 없는 인생을
          사는 사람들이 처절하게 살기 위해 발버둥 치는 모습을 즐기면서 보는 기묘한 성격의 보유자들.
          사업가로서 게임을 관전하는 중에도, 권위적이고 규칙을 중시하는 모습을 보여준다.
        </p>
      </section>
      <section class="typeMatch">
        <p class="title">유형별 궁합</p>
        <div class="GoodBad">
          <section class="typeGood">
            <p class="typeTitle">GOOD</p>
            <img src="../../img/MBTI/지영_ISFP.png" alt="ESTJ와 잘맞는 유형" />
            <p class="typeCharName">지영</p>
            <p class="typeCharInfo">감수성이 풍부하고 독립심이 많은 인물</p>
          </section>
          <section class="typeBad">
            <p class="typeTitle">BAD</p>
            <img src="../../img/MBTI/오일남_INFJ.png" alt="ESTJ와 잘맞는 유형" />
            <p class="typeCharName">오일남</p>
            <p class="typeCharInfo">창의력과 통찰력이 뛰어난 독창적인 인물</p>
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
  name: "Final_ESTJ",
};
</script>

<style scoped>
@import "../../css/Final_MBTI.css";
</style>
