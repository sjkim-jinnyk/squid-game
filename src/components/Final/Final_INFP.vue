<template>
  <div class="Final_MBTI">
    <div class="testMBTI">
      <p class="mbti">INFP</p>
      <p class="charName">강새벽</p>
      <img src="/image/final/강새벽_INFP_200.png" alt="강새벽 이미지" class="mbtiIMG" />
      <p class="mbtiSummary">신념과 조화를 중시하는 <br />이상주의자 인물</p>
    </div>
    <main>
      <section class="mbtiInfo">
        <p class="mbtiInfo_summary">현실세계에서 당신은</p>
        <p class="mbtiInfo_text">
          마음은 따듯하지만 상대방을 잘 알기 전까지는 표현을 잘하지 않는다. 자신이 지향하는 이상에
          대해서는 정열적인 신념을 갖고 있다. 조화로운 관계를 중요시한다. 내면세계에 관심이 많아서
          말보다는 자신의 세계가 먼저다. 내향적인 성격이며 솔직하고 합리적인 모습이 있다. 혼자서
          생각하는 시간을 즐기며 독립심이 강하다
        </p>
      </section>
      <section class="mbtiInfo2">
        <p class="mbtiInfo2_summary">오징어 게임에서 당신은</p>
        <p class="mbtiInfo2_text">
          오징어 게임에서 다른 사람들과 쉽게 어울리지 못하는 모습을 보여준다. 지속적으로 혼자서 있는
          모습이 자주 보이듯이 혼자 조용한 시간을 보내는 걸 즐기는 성격이다. 성훈이 다가가도 쉽게
          마음의 문을 열지는 않지만 친해진 후에는 솔직하고 따듯한 모습들을 보여준다. 구슬게임에서
          지영이가 자신을 위해 희생할 때 눈물을 보이는 정 많은 모습을 보이기도 한다. 자신이 믿고
          친해지는 사람들은 잘 챙기는 모습이 자주 나온다.
        </p>
      </section>
      <section class="typeMatch">
        <p class="title">유형별 궁합</p>
        <div class="GoodBad">
          <section class="typeGood" @click="typeLink('ENFJ')">
            <p class="typeTitle">GOOD</p>
            <img src="/image/final/알리_ENFJ_100.png" alt="INFP와 잘맞는 유형" />
            <p class="typeCharName">알리압둘</p>
            <p class="typeCharInfo">주변을 행복하게 만드는 <br />친절한 인물</p>
          </section>
          <section class="typeBad" @click="typeLink('ESTP')">
            <p class="typeTitle">BAD</p>
            <img src="/image/final/장덕수_ESTP_100.png" alt="INFP와 잘맞는 유형" />
            <p class="typeCharName">장덕수</p>
            <p class="typeCharInfo">다양한 분야에 관심이 있는 <br />활동적인 인물</p>
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
  name: "Final_INFP",
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
  },
};
</script>

<style scoped>
@import "../../css/Final_MBTI.css";
</style>
