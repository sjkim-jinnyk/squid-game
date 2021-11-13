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
      <TimeOut></TimeOut>
      <router-link
        :to="{ name: 'Loading', params: { mbti: mbti } }"
        v-if="testDone"
        class="optionBtn"
      >
        <button
          v-on:click="[toUserChoice(0), clickBtn(0), getResult(choice)]"
          class="option1"
          :class="{ option1Active: option_0 }"
        >
          {{ questions[count].option[0] }}
        </button>
        <button
          v-on:click="[toUserChoice(1), clickBtn(1), getResult(choice)]"
          class="option2"
          :class="{ option2Active: option_1 }"
        >
          {{ questions[count].option[1] }}
        </button>
      </router-link>

      <div v-else class="optionBtn">
        <button
          v-on:click="[toUserChoice(0), clickBtn(0)]"
          class="option1"
          :class="{ option1Active: option_0 }"
        >
          {{ questions[count].option[0] }}
        </button>

        <button
          v-on:click="[toUserChoice(1), clickBtn(1)]"
          class="option2"
          :class="{ option2Active: option_1 }"
        >
          {{ questions[count].option[1] }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import questionList from "../assets/questions.json";
import TimeOut from "../components/TimeOut.vue";

export default {
  name: "QuestionsPage",
  watch: {
    count: function (val) {
      if (val >= 11) {
        this.testDone = true;
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
      this.counterList.unshift(1);
      this.counterList.pop();
    },
    getResult: function (choice) {
      for (let i in choice) {
        if (choice[i] >= 2) {
          this.mbti += i;
        }
      }
      console.log(this.mbti);
    },
    clickBtn(option_num) {
      if (option_num == 0) this.option_0 = true;
      else this.option_1 = true;
      setTimeout(() => {
        if (this.count < 11) this.count += 1;
        this.option_0 = false;
        this.option_1 = false;
      }, 800);
    },
  },
  data() {
    return {
      counterList: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      count: 0,
      choice: new Object({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, P: 0, J: 0 }),
      mbti: "",
      testDone: false,
      option_0: false,
      option_1: false,
    };
  },
  props: {},
  components: {
    TimeOut,
  },
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
.optionBtn {
  display: flex;
  width: 300px;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
}
.option1 {
  margin-top: 10px;
  height: 45px;
  color: white;
  background-color: rgba(231, 62, 126, 0.25);
  border: 1px solid #e73e7e;
  border-radius: 60px;
  animation: move 0.8s ease 0.3s;
}
@keyframes move {
  from {
    transform: translateX(300px);
  }
  to {
    transform: translateX(0px);
  }
}
.option2 {
  margin-top: 10px;
  height: 45px;
  color: white;
  background: rgba(37, 150, 165, 0.25);
  border: 1px solid #2596a5;
  border-radius: 60px;
  animation: move 0.8s ease 0.5s;
}

.option1Active {
  background-color: #e73e7e;
  animation: move2 0.7s ease 0.7s !important;
}

.option2Active {
  background-color: #2596a5;
  animation: move2 0.7s ease 0.7s !important;
}
</style>
