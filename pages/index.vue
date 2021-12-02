<template>
  <div class="container">
    <header>
      <!-- <div class="header"> -->
      <img src="~/assets/image/오징어게임_로고 1.png" />
      <h2 class="subtitle">나는 오징어게임에서 어떤 인물일까?</h2>
      <!-- </div> -->
    </header>

    <div class="main">
      <img src="~/assets/image/main_pig.png" />
    </div>

    <footer>
      <router-link :to="{ name: 'tutorial' }">
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
        <button @click="urlLink">
          <img src="~/assets/image/linkshare_btn.svg" />
        </button>
        <button @click="kakaoLink">
          <img src="~/assets/image/kakao.svg" />
        </button>
        <button @click="facebookLink">
          <img src="~/assets/image/facebook.svg" />
        </button>
        <button class="twitter-share-button" @click="twitterLink">
          <img src="~/assets/image/twitter.svg" />
        </button>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  props: {},
  data() {
    return {
      homeLink: "",
    };
  },
  methods: {
    urlLink() {
      this.$copyText(this.homeLink).then(function () {
        alert("복사되었습니다.");
      });
    },
    kakaoLink() {
      if (process.browser) {
        window.Kakao.Link.sendDefault({
          objectType: "feed",
          content: {
            title: "저랑 게임 하나 하시겠습니까? ",
            description: "나는 오징어 게임에서 어떤 캐릭터일까?",
            imageUrl:
              "https://www.squid-games.site/assets/image/meta/metaimg_%EB%A9%94%EC%9D%B8%EA%B3%B5%EC%9C%A0.png",
            imageWidth: 800,
            imageHeight: 400,
            link: {
              mobileWebUrl: this.homeLink,
              webUrl: this.homeLink,
            },
          },
          buttons: [
            {
              title: "테스트 하기",
              link: {
                mobileWebUrl: this.homeLink,
                webUrl: this.homeLink,
              },
            },
          ],
        });
      }
    },
    facebookLink() {
      if (process.browser) {
        window.open(
          "https://www.facebook.com/sharer/sharer.php?u=https://www.squid-games.site&src=sdkpreparse",
          "pop01",
          "top=10, left=10, width=460, height=600, status=no, menubar=no, toolbar=no, resizable=no",
        );
      }
    },
    twitterLink() {
      const text = "저랑 게임 한판 하실래요?";
      if (process.browser) {
        window.open(
          `https://twitter.com/intent/tweet?text=${text}&url=${this.homeLink}`,
          "pop02",
          "top=10, left=10, width=460, height=600, status=no, menubar=no, toolbar=no, resizable=no",
        );
      }
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
  margin-bottom: 20px;
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
