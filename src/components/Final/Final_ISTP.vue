<template>
  <div class="Final_MBTI">
    <div class="testMBTI">
      <p class="mbti">ISTP</p>
      <p class="charName">프런트맨</p>
      <img src="/image/final/프런트맨_ISTP_200.png" alt="프런트맨 이미지" class="mbtiIMG" />
      <p class="mbtiSummary">풍부한 열정과 상상력으로 <br />무엇이든 해내는 인물</p>
    </div>
    <main>
      <section class="mbtiInfo">
        <p class="mbtiInfo_summary">현실세계에서 당신은</p>
        <p class="mbtiInfo_text">
          조용하고 말이 없어서 처음에는 차가운 인상이지만 알고 보면 따듯한 사람. 절제된 호기심으로
          인생을 관찰하고 상황파악이 빠르다. 자기 자신을 필요 이상으로 드러내지 않는다. 자신의
          느낌이나 생각 정보 계획을 개방하고 상대와 나눌 필요가 있다. 가까운 친구들 외에는 잘 사귀지
          않아서 알아가는데 시간이 걸린다. 자기만의 시간과 공간을 중요시하는 개인주의적 성향으로
          인해 타인과 감정을 공유하지 않는다. 쉽게 감정 공유를 하지 않아 남들이 다가가기에 쉽지
          않다.
        </p>
      </section>
      <section class="mbtiInfo2">
        <p class="mbtiInfo2_summary">오징어 게임에서 당신은</p>
        <p class="mbtiInfo2_text">
          오징어게임의 진행을 총괄적으로 관리하는 인물로, 논리적이고 객관적으로 상황을 관찰하는
          모습을 보여준다. 감정 표현도 없이 차가운 인상을 보여주며 냉정하게 오징어 게임을 운영해
          나간다. 친동생이 자신을 찾으러 왔지만 큰 동요 없이 그를 내치는 모습을 보여준다. 항상
          마스크를 쓰며 혼자 지내면서 감정 표현을 하지 않는다.
        </p>
      </section>
      <section class="typeMatch">
        <p class="title">유형별 궁합</p>
        <div class="GoodBad">
          <section class="typeGood">
            <p class="typeTitle">GOOD</p>
            <img src="/image/final/조상우맘_ESFJ_100.png" alt="ISTP와 잘맞는 유형" />
            <p class="typeCharName">조상우의 어머니</p>
            <p class="typeCharInfo">동정심과 참을성이 많은 <br />양심적인 인물</p>
          </section>
          <section class="typeBad">
            <p class="typeTitle">BAD</p>
            <img src="/image/final/한미녀_ESFP_100.png" alt="ISTP와 잘맞는 유형" />
            <p class="typeCharName">한미녀</p>
            <p class="typeCharInfo">현실적이고 실제적인 <br />사교적인 인물</p>
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
  name: "Final_ISTP",
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
