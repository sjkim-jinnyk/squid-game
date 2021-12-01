<template>
  <div id="timer" :class="{ pause: timerStop, disable: timerStop }"></div>
</template>

<script>
export default {
  name: "TimeOut",
  props: {
    timerStop: Boolean,
  },
};
</script>

<style scoped>
.pause::before {
  animation-play-state: paused !important;
  background-color: #333 !important;
}

#timer {
  position: relative;
  width: 300px;
  height: 16px;
  background: #333;
  border-radius: 60px;

  margin: 0px auto;
  align-content: center;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
}
#timer::after {
  content: "남은 시간";
  position: relative;
  color: #000;
}
#timer::before {
  content: "";
  position: absolute;
  width: 300.68px;
  background-color: white;
  display: block;
  height: 16px;
  border-radius: 60px;
  box-sizing: border-box;
  animation: timer 15s 1;
}
#timer.disable::before {
  content: "";
  position: absolute;
  width: 300.68px;
  background-color: white;
  display: none;
  height: 16px;
  border-radius: 60px;
  box-sizing: border-box;
}
@keyframes timer {
  0% {
    width: 100%;
    background-color: white;
  }
  20% {
    background-color: #ffbfbf;
  }
  40% {
    background-color: #ff8080;
  }
  60% {
    background-color: #ff4040;
  }
  80% {
    background-color: red;
  }
  100% {
    width: 2%;
  }
}
</style>
