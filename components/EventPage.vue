<template>
  <section class="event_container">
    <h2 class="ir">event 화면</h2>
    <article v-if="questionShow" class="event_cont">
      <p class="event_text" :class="{ event_textOut: textOut }">
        {{ lang_en ? "Suddenly a gunshot" : "어둠속에서" }}<br />
        {{ lang_en ? "was heard in the dark" : "갑자기 총소리가 들렸다." }}
      </p>
      <img
        v-if="imgShow"
        src="~/assets/image/event_img.png"
        alt="이벤트화면 이미지"
        class="img_fadeIn"
      />
    </article>
    <article v-else class="event_question">
      <p class="question_text" :class="{ question_EngText: lang_en }">
        {{ lang_en ? "You might die soon." : "곧 죽을지도 모른다." }}
      </p>
      <TimeOut :half-time="halfTime" :timer-stop="timerStop"></TimeOut>
      <div class="question_btn">
        <button
          class="event_option1"
          :class="{ event_option1Active: option1 }"
          @click="option1Click"
        >
          {{ lang_en ? "Run!!" : "도망친다" }}
        </button>
        <button
          class="event_option2"
          :class="{ event_option2Active: option2 }"
          @click="option2Click"
        >
          {{ lang_en ? "try to steal the gun." : "맞서 싸운다" }}
        </button>
      </div>
    </article>
  </section>
</template>

<script>
import TimeOut from "./TimeOut.vue";

export default {
  components: {
    TimeOut,
  },
  props: {
    lang_en: Boolean,
  },
  data() {
    return {
      questionShow: true,
      imgShow: false,
      textOut: false,
      halfTime: true,
      timerStop: false,
      option1: false,
      option2: false,
      option_num: "",
    };
  },
  created() {
    setTimeout(() => {
      this.playSound();
      this.imgShow = true;
    }, 500);
    setTimeout(() => {
      this.imgShow = false;
      this.textOut = true;
    }, 2300);
    setTimeout(() => {
      this.questionShow = false;
    }, 3000);
    setTimeout(() => {
      if (!this.option1 && !this.option2) {
        this.option_num = Math.round(Math.random());
        console.log(this.option_num);
        this.clickBtn(this.option_num);
      }
    }, 11000);
  },
  methods: {
    option1Click() {
      this.timerStop = true;
      this.option1 = true;
      setTimeout(() => {
        this.$emit("event_close");
      }, 800);
    },
    option2Click() {
      this.timerStop = true;
      this.option2 = true;
      setTimeout(() => {
        this.$emit("event_close");
      }, 800);
    },
    clickBtn(num) {
      if (num === 0) this.option1Click();
      else this.option2Click();
    },
    delay(t, v) {
      return new Promise(function (resolve) {
        setTimeout(resolve.bind(null, v), t);
      });
    },
    playSound() {
      const audio = new Audio("/gunSound.mp3");
      audio.volume = 0.3;
      audio.play();
      this.delay(200).then(() => {
        if (window.navigator && window.navigator.vibrate) {
          navigator.vibrate(800);
        }
      });
    },
  },
};
</script>

<style scoped>
.event_container {
  color: white;
}
.event_cont .event_text {
  font-size: 18px;
  font-weight: 500;
  line-height: 26.64px;
  margin-bottom: 39px;
  margin-top: 80px;
}
.event_question {
  padding-top: 228px;
  animation: fadeIn 1s;
}
.event_question .question_text {
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 500;
  line-height: 26.64px;
}
.event_question .question_EngText {
  font-size: 16px;
  line-height: 23.68px;
}
.event_question .question_btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  line-height: 20.72px;
  letter-spacing: -0.02em;
  font-weight: 500;
}
.event_question .question_btn .event_option1 {
  margin-top: 10px;
  width: 300px;
  height: 45px;
  background-color: rgba(231, 62, 126, 0.25);
  border: 1px solid #e73e7e;
  border-radius: 60px;
}
.event_question .question_btn .event_option1Active {
  background-color: #e73e7e;
}
.event_question .question_btn .event_option2 {
  margin-top: 10px;
  width: 300px;
  height: 45px;
  background: rgba(37, 150, 165, 0.25);
  border: 1px solid #2596a5;
  border-radius: 60px;
}
.event_question .question_btn .event_option2Active {
  background-color: #2596a5;
}
.event_textOut {
  animation: fadeOut 1s;
}
.img_fadeIn {
  animation: fadeInOut 1s;
  -webkit-animation: fadeInOut 2s; /* Safari and Chrome */
}
@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes fadeInOut {
  /* Safari and Chrome */
  0% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes fadeOut {
  /* Safari and Chrome */
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes fadeIn {
  /* Safari and Chrome */
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
