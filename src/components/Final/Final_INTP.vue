<template>
  <div class="Final_MBTI">
    <div class="testMBTI">
      <p class="mbti">INTP</p>
      <p class="charName">진행요원</p>
      <img src="/image/final/진행요원_INTP_200.png" alt="진행요원 이미지" class="mbtiIMG" />
      <p class="mbtiSummary">이해가 빠르고 통찰력 있는 <br />아이디어형 인물</p>
    </div>
    <main>
      <section class="mbtiInfo">
        <p class="mbtiInfo_summary">현실세계에서 당신은</p>
        <p class="mbtiInfo_text">
          조용하고 과묵하지만 관심 있는 분야에서는 말을 잘한다. 분석적이고 논리적이며 객관적 비평을
          잘해서 진지충이라는 소리를 자주 듣는다. 큰일에 잘 개입하지 않는다. 남을 설득하는 일이 거의
          없다. 이해가 빠르고 통찰력이 뛰어나고 지적 관심이 많다. 무뚝뚝하면 잡담 같은 것도 잘
          못하고 싫어한다.
        </p>
      </section>
      <section class="mbtiInfo2">
        <p class="mbtiInfo2_summary">오징어 게임에서 당신은</p>
        <p class="mbtiInfo2_text">
          무뚝뚝하게 가면만 쓰고 오징어 게임 진행을 도우는 인물이다. 조용하고 과묵하게 자기가 맡은
          일을 열심히 한다. 남을 설득하지 않고 논리적으로 생각을 하고 판단하는 모습을 보여준다.
        </p>
      </section>
      <section class="typeMatch" v-if="!firstTest">
        <p class="title">유형별 궁합</p>
        <div class="GoodBad">
          <section class="typeGood" @click="typeLink('ENFJ')">
            <p class="typeTitle">GOOD</p>
            <img src="/image/final/알리_ENFJ_100.png" alt="INTP와 잘맞는 유형" />
            <p class="typeCharName">알리압둘</p>
            <p class="typeCharInfo">주변을 행복하게 만드는 <br />친절한 인물</p>
          </section>
          <section class="typeBad" @click="typeLink('ENFP')">
            <p class="typeTitle">BAD</p>
            <img src="/image/final/성기훈_ENFP_100.png" alt="INTP와 잘맞는 유형" />
            <p class="typeCharName">성기훈</p>
            <p class="typeCharInfo">풍부한 열정과 상상력으로 <br />무엇이든 해내는 인물</p>
          </section>
        </div>
      </section>
    </main>
    <footer>
      <section v-if="!firstTest">
        <LinkShare :resultLink="resultLink" :homeLink="homeLink"></LinkShare>
        <div class="footerBTN">
          <button class="allResultBTN" @click="showResult">결과 전체보기</button>
          <button class="testRestart" @click="testRestart">테스트 다시하기</button>
        </div>
      </section>
      <article v-else>
        <button class="returnResult" @click="returnResult">결과로 돌아가기</button>
      </article>
    </footer>
    <Final_Modal v-if="showModal" @close="showModal = false" v-on:closeModal="closeModal">
    </Final_Modal>
  </div>
</template>

<script>
import Final_Modal from "./Final_Modal.vue";
import LinkShare from "../LinkShare.vue";

export default {
  name: "Final_INTP",
  props: {
    firstTest: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showModal: false,
      resultLink: window.location.href,
      homeLink: window.location.origin,
    };
  },
  components: {
    Final_Modal,
    LinkShare,
  },
  methods: {
    showResult() {
      this.showModal = !this.showModal;
    },
    closeModal(show) {
      this.showModal = show;
    },
    typeLink(type) {
      this.$router.push({ name: `Final_${type}`, params: { firstTest: true } });
    },
    testRestart() {
      this.$router.push({ name: "Main" });
    },
    returnResult() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
@import "../../css/Final_MBTI.css";
</style>
