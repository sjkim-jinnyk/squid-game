<template>
  <main class="container">
    <img class="logoImg" src="~/assets/image/logo_ko.png" />
    <h2 class="subtitle">나는 오징어게임에서 어떤 인물일까?</h2>
    <img class="mainImg" src="~/assets/image/main.png" />
    <section>
      <nav>
        <router-link :to="{ path: 'ko/tutorial' }">
          <button id="start_btn" type="button">
            테스트하기
            <svg class="svg-icon-angle" viewBox="0 0 1024 1024" version="1.1">
              <path
                d="M383.291616 808.954249c-5.175883 0-10.353812-1.950422-14.338566-5.862521-8.064676-7.919367-8.182356-20.877493-0.26299-28.942169l273.602402-278.620695L368.69006 216.907145c-7.919367-8.064676-7.801686-21.022803 0.26299-28.942169 8.065699-7.918343 21.022803-7.80271 28.942169 0.26299l287.685141 292.960285c7.818059 7.961322 7.818059 20.717857 0 28.67918L397.895219 802.826692C393.887952 806.907637 388.591319 808.954249 383.291616 808.954249z"
              />
            </svg>
          </button>
        </router-link>
      </nav>
      <article>
        <p class="share_box">공유하기</p>
        <article class="share_btn">
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
        </article>
      </article>
    </section>
    <footer class="email">
      <small>Feedback</small>
      <small>ddusi.developer@gmail.com</small>
    </footer>
  </main>
</template>

<script>
export default {
  name: "MainPage",
  props: {},
  data() {
    return {
      homeLink: "",
      data: null,
    };
  },
  head() {
    return {
      meta: [
        {
          hid: "title",
          name: "og:title",
          content: "오징어게임 MBTI 테스트",
        },
        {
          hid: "description",
          name: "og:description",
          content: "나는 오징어게임에서 어떤 인물일까?",
        },
        {
          hid: "image",
          name: "og:image",
          content: `${process.env.baseURL}/image/meta/metaimg_main.png`,
        },
        // Twitter Open Graph
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "오징어게임 MBTI 테스트",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "나는 오징어게임에서 어떤 인물일까?",
        },

        {
          hid: "twitter:image",
          name: "twitter:image",
          content: `${process.env.baseURL}/image/meta/metaimg_main.png`,
        },
      ],
    };
  },
  mounted() {
    this.$store.commit("clearTimer");
    this.homeLink = window.location.origin;
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
            title: "저랑 게임 하나 하시겠습니까?",
            description: "나는 오징어 게임에서 어떤 캐릭터일까?",
            imageUrl: `${process.env.baseURL}/image/meta/metaimg_main.png`,
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
          `https://www.facebook.com/sharer/sharer.php?u=${process.env.baseURL}/ko&src=sdkpreparse`,
          "pop01",
          "top=10, left=10, width=460, height=600, status=no, menubar=no, toolbar=no, resizable=no"
        );
      }
    },
    twitterLink() {
      const text = "저랑 게임 하나 하시겠습니까?";
      if (process.browser) {
        window.open(
          `https://twitter.com/intent/tweet?text=${text}&url=${this.homeLink}/ko&hashtags=오징어게임,심리테스트`,
          "pop02",
          "top=10, left=10, width=460, height=600, status=no, menubar=no, toolbar=no, resizable=no"
        );
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logoImg {
  height: 60px;
  margin-top: 60px;
}
.subtitle {
  margin-top: 20px;
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
}
#start_btn {
  position: static;
  margin-top: 20px;
  width: 200px;
  height: 45px;
  background: #e73e7e;
  color: white;
  border-radius: 60px;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
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
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  font-weight: 700;
}
.share_btn {
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 196px;
}
.email {
  margin-top: 80px;
  margin-bottom: 60px;
  color: #888888;
  font-family: Roboto;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
}
.email small:nth-child(1) {
  margin-right: 8px;
}
</style>
