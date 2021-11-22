<template>
  <div class="Final_MBTI">
    <div class="testMBTI">
      <p class="mbti">ISFJ</p>
      <p class="charName">병기</p>
      <img src="/image/final/병기_ISFJ_200.png" alt="병기 이미지" class="mbtiIMG" />
      <p class="mbtiSummary">책임감이 강하고 헌신적인 <br />인내심 많은 인물</p>
    </div>
    <main>
      <section class="mbtiInfo">
        <p class="mbtiInfo_summary">현실세계에서 당신은</p>
        <p class="mbtiInfo_text">
          열성적이며 활발하고 창의적임 철저한 계획을 세우기 보다는 자기 스타일대로 한다. 열정적으로
          새 관계를 만들어가며 사람들과 자유롭게 어울리는 것을 즐긴다. 주위의 분위기를 밝게 만드는
          에너지의 소유자라 주변 사람들에게 인기가 많다. 다른 사람들에게 많은 관심을 주고 그들을 잘
          통솔한다. 관심있는 일이면 무엇이든 해내는 열성파 풍부한 에너지와 상상력을 갖고 즉흥적으로
          일을 재빠르게 하는 성격. 한가지 일을 마무리 짓지 않고 다른 일을 새롭게 시작하는 경향이
          있다. 말이 많고 냉철해야 할 때 고민을 많이 함.
        </p>
      </section>
      <section class="mbtiInfo2">
        <p class="mbtiInfo2_summary">오징어 게임에서 당신은</p>
        <p class="mbtiInfo2_text">
          드라마내에서 어마어마한 빚이 있을 때, 그 빚을 갚기 위해 도박을 하는 무모한 모습을
          보여준다. 조상우와는 반대되는 성격으로, 달고나 게임에서 달고나를 핥아서 뽑는 등, 창의적인
          방법으로 문제를 해결하는 능력을 보여준다. 나이 많은 오일남과 아픈 강새벽을 계속
          챙겨주듯이, 다른 사람들을 잘 도와주는 성격이다. 오징어 게임 내에서도 항상 적극적이고
          열정적으로 임하는 모습을 보여준다. 팀을 짜는 과정에서도 주도적으로 팀을 짜면서 새 관계를
          만들어가는 모습을 보여준다. 가끔씩 감정에 매몰되는 모습을 보임.
        </p>
      </section>
      <section class="typeMatch" v-if="!firstTest">
        <p class="title">유형별 궁합</p>
        <div class="GoodBad">
          <section class="typeGood" @click="typeLink('INFJ')">
            <p class="typeTitle">GOOD</p>
            <img src="/image/final/오일남_INFJ_100.png" alt="ISFJ와 잘맞는 유형" />
            <p class="typeCharName">오일남</p>
            <p class="typeCharInfo">창의력과 통찰력이 뛰어난 <br />독창적인 인물</p>
          </section>
          <section class="typeBad" @click="typeLink('ENTJ')">
            <p class="typeTitle">BAD</p>
            <img src="/image/final/조상우_ENTJ_100.png" alt="ISFJ와 잘맞는 유형" />
            <p class="typeCharName">조상우</p>
            <p class="typeCharInfo">전략가로서 실리를 챙기는 <br />지도자형 인물</p>
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
  name: "Final_ISFJ",
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
      mbti: "ISFJ",
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
