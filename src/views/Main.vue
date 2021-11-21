<template>
  <div class="container">
    <header>
      <!-- <div class="header"> -->
      <img src="image/오징어게임_로고 1.png" />
      <h2 class="subtitle">나는 오징어게임에서 어떤 인물일까?</h2>
      <!-- </div> -->
    </header>

    <div class="main">
      <img src="image/main_pig.png" />
    </div>

    <footer>
      <!-- <router-link to="/tutorial"> -->
      <router-link :to="{ name: 'Tutorial', params: { testStart: testStart } }">
        <button id="start_btn" type="button">
          테스트하기
          <svg class="svg-icon-angle" viewBox="0 0 1024 1024" version="1.1">
            <path
              d="M383.291616 808.954249c-5.175883 0-10.353812-1.950422-14.338566-5.862521-8.064676-7.919367-8.182356-20.877493-0.26299-28.942169l273.602402-278.620695L368.69006 216.907145c-7.919367-8.064676-7.801686-21.022803 0.26299-28.942169 8.065699-7.918343 21.022803-7.80271 28.942169 0.26299l287.685141 292.960285c7.818059 7.961322 7.818059 20.717857 0 28.67918L397.895219 802.826692C393.887952 806.907637 388.591319 808.954249 383.291616 808.954249z"
            />
          </svg>
        </button>
      </router-link>
      <h2 class="share_box">공유하기</h2>
      <div class="share_btn">
        <img src="/image/share_btn.svg" />
        <img src="/image/kakao.svg" @click="kakaoLink" />
        <a target="_blank" @click="facebookLink">
          <img src="/image/facebook.svg" />
        </a>
        <a class="twitter-share-button" @click="twitterLink">
          <img src="/image/twitter.svg" />
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  props: {
    msg: String,
  },
  data() {
    return {
      testStart: true,
    };
  },
  methods: {
    kakaoLink() {
      window.Kakao.Link.sendScrap({
        requestUrl: "https://developers.kakao.com",
      });
    },
    facebookLink() {
      window.open(
        "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
      );
    },
    twitterLink() {
      let sendUrl = "https://naver.com";
      window.open(`https://twitter.com/intent/tweet?&url=${sendUrl}`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  height: 197px;
  /* width: 360px; */
}

header > img {
  height: 60px;
  width: 219px;
  margin: 60px 70px 0px 70px;
}

.subtitle {
  margin-top: 20px;
  margin-bottom: 0px;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: -0.02em;
}

.main {
  height: 440px;
  /* width: 360px; */
}

.main > img {
  height: 440px;
  width: 360px;
}

footer {
  height: 252px;
}

#start_btn {
  position: static;
  margin-top: 20px;
  width: 200px;
  height: 45px;
  background: #e73e7e;
  border-radius: 60px;

  color: white;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  text-align: center;
  /* align-items: center; */
  letter-spacing: -0.02em;
}

.svg-icon-angle {
  width: 1em;
  height: 1em;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}

.share_box {
  margin-top: 40px;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: -0.02em;
}

.share_btn {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  margin: auto;
  width: 196px;
}
</style>
