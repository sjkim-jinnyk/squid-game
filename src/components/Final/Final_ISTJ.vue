<template>
  <div class="Final_MBTI">
    <div class="testMBTI">
      <p class="mbti">ISTJ</p>
      <p class="charName">황준호</p>
      <img src="/image/final/황준호_ISTJ_200.png" alt="황준호 이미지" class="mbtiIMG" />
      <p class="mbtiSummary">시작한 일은 끝까지 하는 <br />완벽주의자 인물</p>
    </div>
    <main>
      <section class="mbtiInfo">
        <p class="mbtiInfo_summary">현실세계에서 당신은</p>
        <p class="mbtiInfo_text">
          궁금한 것은 목숨이 걸려도 직접 체험하고 경험하는 도전적인 성격이다. 한번 시작한 일은
          끝까지 성실하게 해내는 성격이다. 현실적, 실용적, 철저하고 체계적이다. 열심히 일하고
          세부적인 절차에 세심하다. 자신만의 기준이 있고 그 기준에 따라 판단을 한다.
        </p>
      </section>
      <section class="mbtiInfo2">
        <p class="mbtiInfo2_summary">오징어 게임에서 당신은</p>
        <p class="mbtiInfo2_text">
          도봉 경찰서 소속 경찰인 황준호는 형의 고시원 방에서 수상한 명함을 발견한 후에 사라진 형을
          찾아 오징어 게임이 열리는 섬까지 가는 철저한 계획을 망설임없이 실행하는 모습을 보여준다.
          위험한 오징어 게임 내부에도 직접 들어가서 형의 실종에 관한 비밀을 풀기 위해 목숨 걸고
          수사를 하는 모습을 통해 그의 도전적인 성격을 보여준다. 수사중에도 뛰어난 관찰력과 분석력을
          통해 오징어 게임의 비밀을 파헤쳐 나간다.
        </p>
      </section>
      <section class="typeMatch" v-if="!firstTest">
        <p class="title">유형별 궁합</p>
        <div class="GoodBad">
          <section class="typeGood" @click="typeLink('ENFP')">
            <p class="typeTitle">GOOD</p>
            <img src="/image/final/성기훈_ENFP_100.png" alt="ISTJ와 잘맞는 유형" />
            <p class="typeCharName">성기훈</p>
            <p class="typeCharInfo">풍부한 열정과 상상력으로 <br />무엇이든 해내는 인물</p>
          </section>
          <section class="typeBad" @click="typeLink('ENFJ')">
            <p class="typeTitle">BAD</p>
            <img src="/image/final/알리_ENFJ_100.png" alt="ISTJ와 잘맞는 유형" />
            <p class="typeCharName">알리압둘</p>
            <p class="typeCharInfo">주변을 행복하게 만드는 <br />친절한 인물</p>
          </section>
        </div>
      </section>
    </main>
    <footer>
      <section v-if="!firstTest">
        <LinkShare :resultLink="resultLink" :homeLink="homeLink" :mbti="mbti"></LinkShare>
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
  name: "Final_ISTJ",
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
      mbti: "ISTJ",
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
