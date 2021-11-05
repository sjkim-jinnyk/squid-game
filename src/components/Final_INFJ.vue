<template>
  <div class="Final_MBTI">
    <div class="testMBTI">
      <p class="mbti">INFJ</p>
      <p class="charName">오일남</p>
      <img src="../img/MBTI/오일남_INFJ.png" alt="오일남 이미지" class="mbtiIMG" />
      <p class="mbtiSummary">창의력과 통찰력이 뛰어난 독창적인 인물</p>
    </div>
    <main>
      <section class="mbtiInfo">
        <p class="mbtiInfo_summary">MBTI에 가장 알맞는 한줄설명</p>
        <p class="mbtiInfo_text">
          창의력과 통찰력이 뛰어나다. 독창성과 사적인 독립심이 강하다. 확고한 신념과 원칙을 갖고
          있다. 다정하고 따듯하지만 냉철한 면도 있다. 대체로 약자의 편에 선다. 직면한 상황을
          다방면으로 바라보고 이해할 수 있는 능력이 뛰어나다. 자기 안에 갈등이 많고 복잡하다 남에게
          강요보단 행동과 권유로 사람들의 마음을 움직이는 지도력이 있다.
        </p>
      </section>
      <section class="mbtiInfo2">
        <p class="mbtiInfo2_summary">MBTI에 맞는 드라마 속 모습들</p>
        <p class="mbtiInfo2_text">
          456명 중 제일 연장자로서 싸움이 일어나면 말리고 설득과 이야기로 팀원들을 움직이는 매력이
          있는 인물이다. 상냥한 성격으로 남을 배려하는 모습을 자주 보여주고 동시에 게임을 할 때는
          집중을 하고 전략을 짜는 냉정한 모습도 보여준다. 달고나 게임과 줄다리기 게임을 할 때 남다른
          창의력과 독창력을 발휘하여 팀원들의 무사한 통과를 도와줄 수 있게 끔 한다. 구슬게임에서
          자신이 이겼음에도 불구하고 “우린 깐부자나” 라는 말과 함께 성기훈에게 양보하는 따듯한
          모습도 보여준다.
        </p>
      </section>
      <section class="typeMatch">
        <p class="title">유형별 궁합</p>
        <div class="GoodBad">
          <section class="typeGood">
            <p class="typeTitle">GOOD</p>
            <img src="../img/MBTI/장덕수_ESTP.png" alt="INFJ와 잘맞는 유형" />
            <p class="typeCharName">장덕수</p>
            <p class="typeCharInfo">다양한 분야에 관심이 있는 활동적인 인물</p>
          </section>
          <section class="typeBad">
            <p class="typeTitle">BAD</p>
            <img src="../img/MBTI/VIP_ESTJ.png" alt="INFJ와 잘맞는 유형" />
            <p class="typeCharName">VIPS</p>
            <p class="typeCharInfo">계획하는 능력이 뛰어난 사업가형 인물</p>
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
  name: "Final_INFJ",
};
</script>

<style scoped>
@import "../css/Final_MBTI.css";
</style>
