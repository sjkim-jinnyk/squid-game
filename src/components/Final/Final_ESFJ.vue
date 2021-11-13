<template>
  <div class="Final_MBTI">
    <div class="testMBTI">
      <p class="mbti">ESFJ</p>
      <p class="charName">조상우의 어머니</p>
      <img src="/image/final/조상우맘_ESFJ_200.png" alt="조상우맘 이미지" class="mbtiIMG" />
      <p class="mbtiSummary">동정심과 참을성이 많은 양심적인 인물</p>
    </div>
    <main>
      <section class="mbtiInfo">
        <p class="mbtiInfo_summary">MBTI에 가장 알맞는 한줄설명</p>
        <p class="mbtiInfo_text">
          항상 웃으면서 동정심과 동료애가 많다 양심적이고 정리정돈을 잘한다. 참을성이 많고 남을 잘
          돕는다. 다른 이들의 무관심에는 민감하고 남들이 인정해주면 엄청 좋아함. 성격이 급하고
          활발하고 계획을 잘 세운다. 사람들과 대화할 때 리액션을 잘한다.
        </p>
      </section>

      <section class="mbtiInfo2">
        <p class="mbtiInfo2_summary">MBTI에 맞는 드라마 속 모습들</p>
        <p class="mbtiInfo2_text">
          힘들게 가게를 운영하고 있는 현실에도 친절하고 재치가 있으며 다른 사람들에게 관심을 쏟는다.
          안타까운 상황에 처해있는 성기훈을 보고 안타까워하며 걱정을 한다. 아들의 자랑을 하는
          모습에서 남들의 인정을 좋아하는 성격임을 볼 수 있다. 끝까지 아들을 믿는 모습에서 그녀의
          아들에 대한 관심과 사랑을 엿볼 수 있다.
        </p>
      </section>
      <section class="typeMatch">
        <p class="title">유형별 궁합</p>
        <div class="GoodBad">
          <section class="typeGood">
            <p class="typeTitle">GOOD</p>
            <img src="/image/final/진행요원_INTP_100.png" alt="ESFJ와 잘맞는 유형" />
            <p class="typeCharName">진행요원</p>
            <p class="typeCharInfo">이해가 빠르고 통찰력 있는 아이디어형 인물</p>
          </section>
          <section class="typeBad">
            <p class="typeTitle">BAD</p>
            <img src="/image/final/주최자_INTJ_100.png" alt="ESFJ와 잘맞는 유형" />
            <p class="typeCharName">주최자</p>
            <p class="typeCharInfo">행동과 사고가 단호한 독립적인 인물</p>
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
  name: "Final_ESFJ",
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
