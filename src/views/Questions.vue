<template>
  <div class="container">
    <div class="main">
      <div class="count_box">
        <svg
          width="208"
          height="16"
          viewBox="0 0 208 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="6.5" cy="6.5" r="6.5" :fill="getCounterColer(counterList[0])" />
          <path d="M25 0L31.9282 12H18.0718L25 0Z" :fill="getCounterColer(counterList[1])" />
          <rect x="37" width="12" height="12" :fill="getCounterColer(counterList[2])" />
          <circle cx="59.5" cy="6.5" r="6.5" :fill="getCounterColer(counterList[3])" />
          <path d="M78 0L84.9282 12H71.0718L78 0Z" :fill="getCounterColer(counterList[4])" />
          <rect x="90" width="12" height="12" :fill="getCounterColer(counterList[5])" />
          <circle cx="112.5" cy="6.5" r="6.5" :fill="getCounterColer(counterList[6])" />
          <path d="M131 0L137.928 12H124.072L131 0Z" :fill="getCounterColer(counterList[7])" />
          <rect x="143" width="12" height="12" :fill="getCounterColer(counterList[8])" />
          <circle cx="165.5" cy="6.5" r="6.5" :fill="getCounterColer(counterList[9])" />
          <path d="M184 0L190.928 12H177.072L184 0Z" :fill="getCounterColer(counterList[10])" />
          <rect x="196" width="12" height="12" :fill="getCounterColer(counterList[11])" />
        </svg>
      </div>
      <img :src="`image/${questions[count].id}_question.png`" />
      <h3 v-html="questions[count].desc"></h3>
    </div>

    <div class="option_box">
      <div id="timer">남은시간</div>
      <router-link to="loading" v-if="testdone">
        <button
          v-on:click="
            toUserChoice(0);
            getResult(choice);
          "
          class="option"
        >
          {{ questions[count].option[0] }}</button
        ><br />
        <button
          v-on:click="
            toUserChoice(1);
            getResult(choice);
          "
          class="option"
        >
          {{ questions[count].option[1] }}
        </button>
      </router-link>

      <div v-else>
        <button v-on:click="toUserChoice(0)" class="option">
          {{ questions[count].option[0] }}</button
        ><br />
        <button v-on:click="toUserChoice(1)" class="option">
          {{ questions[count].option[1] }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import questionList from "../assets/questions.json";

export default {
  name: "QuestionsPage",
  watch: {
    count: function (val) {
      if (val >= 11) {
        this.testdone = true;
      }
    },
  },
  computed: {
    questions() {
      return questionList;
    },
  },
  methods: {
    getCounterColer: function (num) {
      if (num) return "#E73E7E";
      return "#333333";
    },
    toUserChoice: function (option_number) {
      if (this.count > 12) return 0;
      let mbti_value = this.questions[this.count].option_mbti[option_number];
      this.choice[mbti_value] += 1;
      if (this.count < 11) this.count += 1;
      this.counterList.unshift(1);
      this.counterList.pop();
    },
    getResult: function (choice) {
      console.log(choice);
      for (let i in choice) {
        if (choice[i] >= 2) {
          this.result += i;
          console.log(this.result);
        }
      }
      // console.log(this.choice2);
    },
  },
  data() {
    return {
      counterList: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      count: 0,
      choice: new Object({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, P: 0, J: 0 }),
      result: "",
      testdone: false,
    };
  },
  props: {},
};
</script>
<style scoped>
.main {
  height: 419px;
}

.main > img {
  margin: 40px 26px 0px 26px;
}

.main > h3 {
  margin-top: 32px;
}

.count_box {
  margin-top: 40px;
}

.option_box {
  margin-top: 35px;
  height: 151px;
}

#timer {
  position: static;
  width: 300.68px;
  height: 16px;
  left: 30px;
  top: 20px;

  background: #ffffff;
  border-radius: 60px;

  margin: 0px auto;
  align-content: center;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
}

.option {
  position: static;
  margin-top: 10px;
  width: 300px;
  height: 45px;
  left: 30.34px;
  top: 46px;

  color: white;
  background: #e73e7e;
  border-radius: 60px;
}
</style>
