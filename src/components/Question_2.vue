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
          <circle cx="6.5" cy="6.5" r="6.5" fill="#E73E7E" />
          <path d="M25 0L31.9282 12H18.0718L25 0Z" fill="#E73E7E" />
          <rect x="37" width="12" height="12" fill="#333333" />
          <circle cx="59.5" cy="6.5" r="6.5" fill="#333333" />
          <path d="M78 0L84.9282 12H71.0718L78 0Z" fill="#333333" />
          <rect x="90" width="12" height="12" fill="#333333" />
          <circle cx="112.5" cy="6.5" r="6.5" fill="#333333" />
          <path d="M131 0L137.928 12H124.072L131 0Z" fill="#333333" />
          <rect x="143" width="12" height="12" fill="#333333" />
          <circle cx="165.5" cy="6.5" r="6.5" fill="#333333" />
          <path d="M184 0L190.928 12H177.072L184 0Z" fill="#333333" />
          <rect x="196" width="12" height="12" fill="#333333" />
        </svg>
      </div>
      <img src="image/2_question.png" />
      <h3>
        갖고 있던 돈을 다 잃어 좌절할 때<br />
        낯선 남자가 와서 말을 걸었다<br />
        "10만원 걸고 딱지치기 하시겠나요?"
      </h3>
    </div>

    <div class="option_box">
      <div id="timer">남은시간</div>
      <button class="option1">밑져야 본전이지! GO!</button><br />
      <button class="option1">낯선 사람이 말건다 모른척하자...</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Question_2",
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

.option1 {
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
