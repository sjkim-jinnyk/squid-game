<template>
  <div class="Final_MBTI">
    <div class="testMBTI">
      <p class="mbti">INTJ</p>
      <p class="charName">주최자</p>
      <img src="/image/final/주최자_INTJ_200.png" alt="주최자 이미지" class="mbtiIMG" />
      <p class="mbtiSummary">행동과 사고가 단호한 <br />독립적인 인물</p>
    </div>
    <main>
      <section class="mbtiInfo">
        <p class="mbtiInfo_summary">현실세계에서 당신은</p>
        <p class="mbtiInfo_text">
          행동과 사고에 있어서 독창적이다. 내적 신념과 비전이 엄청 강하며 고집이 아주 세다.
          목적달성을 위해서는 모든 시간과 노력을 다해 일한다. 자신과 타인의 능력을 중시한다 16가지
          유형중 가장 독립적이고 단호하다. 범생이라는 평가가 늘 따라다니며 타인으로부터 항상
          신뢰받는다.
        </p>
      </section>
      <section class="mbtiInfo2">
        <p class="mbtiInfo2_summary">오징어 게임에서 당신은</p>
        <p class="mbtiInfo2_text">
          빚에 허덕이며 살고 미래가 불확실한 사람들을 모아서 무자비한 오징어 게임을 개최한 게임
          주최자이다. 사회적으로 신뢰받는 능력 있는 사업가 출신이다. 어마어마한 재력가이지만 삶의
          낙을 잃어서, 궁지에 몰린 사람들이 게임을 하면서 처절하게 생존하는 모습을 보면서 즐거움을
          느낀다. 자신만의 독특한 신념을 바탕으로 오징어 게임을 꾸준히 개최하고 있다. 뇌종양으로
          시한부 인생을 살아가는 와중에도 자신이 주최하는 게임에 직접 참여를 하면서 열정을 다하는
          기묘함을 보여준다. 드라마 내에서 치밀한 일처리가 강점이고 많은 경험과 연룬 덕분에 타인을
          손쉽게 조정하는 능력을 보여준다.
        </p>
      </section>
      <section class="typeMatch">
        <p class="title">유형별 궁합</p>
        <div class="GoodBad">
          <section class="typeGood" @click="typeLink('ESFP')">
            <p class="typeTitle">GOOD</p>
            <img src="/image/final/한미녀_ESFP_100.png" alt="INTJ와 잘맞는 유형" />
            <p class="typeCharName">한미녀</p>
            <p class="typeCharInfo">현실적이고 실제적인 <br />사교적인 인물</p>
          </section>
          <section class="typeBad" @click="typeLink('ESFJ')">
            <p class="typeTitle">BAD</p>
            <img src="/image/final/조상우맘_ESFJ_100.png" alt="INTJ와 잘맞는 유형" />
            <p class="typeCharName">조상우의 어머니</p>
            <p class="typeCharInfo">동정심과 참을성이 많은<br />양심적인 인물</p>
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
        <button class="allResultBTN" @click="showResult">결과 전체보기</button>
        <button class="testRestart" @click="testRestart">테스트 다시하기</button>
      </div>
    </footer>
    <Final_Modal v-if="showModal" @close="showModal = false" v-on:closeModal="closeModal">
    </Final_Modal>
  </div>
</template>

<script>
import Final_Modal from "./Final_Modal.vue";

export default {
  name: "Final_INTJ",
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    Final_Modal,
  },
  methods: {
    showResult() {
      this.showModal = !this.showModal;
    },
    closeModal(show) {
      this.showModal = show;
    },
    typeLink(type) {
      this.$router.push({ name: `Final_${type}` });
    },
    testRestart() {
      this.$router.push({ name: "Main" });
    },
  },
};
</script>

<style scoped>
@import "../../css/Final_MBTI.css";
</style>
