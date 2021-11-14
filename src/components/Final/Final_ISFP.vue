<template>
  <div class="Final_MBTI">
    <div class="testMBTI">
      <p class="mbti">ISFP</p>
      <p class="charName">지영</p>
      <img src="/image/final/지영_ISFP_200.png" alt="지영 이미지" class="mbtiIMG" />
      <p class="mbtiSummary">감수성이 풍부하고 <br />독립심이 많은 인물</p>
    </div>
    <main>
      <section class="mbtiInfo">
        <p class="mbtiInfo_summary">현실세계에서 당신은</p>
        <p class="mbtiInfo_text">
          말보다 행동으로 따듯함을 나타낸다. 감정기복이 심하고 공감능력이 좋다 귀찮음이 많고 의욕이
          부족한 편이다. 남 눈치를 많이 봐서 자신만의 시간을 갖는 것을 좋아한다. 상대방을 잘 알게 될
          때까지 따듯함을 잘 드러내지 않는다. 거절과 부정적 반응을 하기 어렵고 양보를 잘한다.
          감수성이 예민하고 고민거리나 힘든 일을 혼자 해결하려고 한다.
        </p>
      </section>
      <section class="mbtiInfo2">
        <p class="mbtiInfo2_summary">오징어 게임에서 당신은</p>
        <p class="mbtiInfo2_text">
          안타까운 가족사를 갖고 있는 지영은 겉으로는 차가운 인물이지만 구슬게임에서 고의로 져주는
          모습애서도 나오듯이 마음이 따듯하고 동정적이다. 강새벽과 친해지기 전에 남에게 쉽게 정을
          주지 않고 혼자 있는 모습이 자주 나타난다. 강새벽과 대화 후 뛰어난 공감능력을 바탕으로
          동질감을 느끼고 그녀에게 마음의 문을 열면서 따듯함을 나타낸다.
        </p>
      </section>
      <section class="typeMatch">
        <p class="title">유형별 궁합</p>
        <div class="GoodBad">
          <section class="typeGood">
            <p class="typeTitle">GOOD</p>
            <img src="/image/final/VIP_ESTJ_100.png" alt="ISFP와 잘맞는 유형" />
            <p class="typeCharName">VIPS</p>
            <p class="typeCharInfo">계획하는 능력이 뛰어난 <br />사업가형 인물</p>
          </section>
          <section class="typeBad">
            <p class="typeTitle">BAD</p>
            <img src="/image/final/의문남_ENTP_100.png" alt="ISFP와 잘맞는 유형" />
            <p class="typeCharName">의문의 남자</p>
            <p class="typeCharInfo">자신감과 에너지가 넘치는 <br />혁신적인 인물</p>
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
        <button class="testRestart">테스트다시하기</button>
      </div>
    </footer>
    <Final_Modal v-if="showModal" @close="showModal = false" v-on:closeModal="closeModal">
    </Final_Modal>
  </div>
</template>

<script>
import Final_Modal from "./Final_Modal.vue";

export default {
  name: "Final_ISFP",
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
  },
};
</script>

<style scoped>
@import "../../css/Final_MBTI.css";
</style>
