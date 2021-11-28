<template>
  <article :class="{ container_share_middle: middle, share_hide: shareHide }">
    <p class="share_box_middle" v-if="middle">결과 공유하고 확인하기</p>
    <p class="share_box" v-else>공유하기</p>

    <div class="share_btn">
      <button @click="[urlLink(resultLink), blurEffect()]">
        <img src="/image/linkshare_btn.svg" />
      </button>
      <button @click="[kakaoLink(resultLink, homeLink), blurEffect()]">
        <img src="/image/kakao.svg" />
      </button>
      <button @click="[facebookLink(mbti), blurEffect()]">
        <img src="/image/facebook.svg" />
      </button>
      <button class="twitter-share-button" @click="[twitterLink(resultLink), blurEffect()]">
        <img src="/image/twitter.svg" />
      </button>
    </div>
  </article>
</template>

<script>
export default {
  props: ["resultLink", "homeLink", "mbti", "middle"],
  data() {
    return {
      middleShare: this.middle,
      shareHide: false,
    };
  },
  methods: {
    urlLink(link) {
      this.$copyText(link).then(function () {
        alert("복사되었습니다.");
      });
    },
    kakaoLink(resultLink, homeLink) {
      window.Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "저랑 게임 하나 하시겠습니까? ",
          description: "나는 오징어 게임에서 어떤 캐릭터일까?",
          imageUrl:
            "https://www.squid-games.site/image/meta/metaimg_%EB%A9%94%EC%9D%B8%EA%B3%B5%EC%9C%A0.png",
          imageWidth: 800,
          imageHeight: 400,
          link: {
            mobileWebUrl: homeLink,
            webUrl: homeLink,
          },
        },
        buttons: [
          {
            title: "결과보기",
            link: {
              mobileWebUrl: resultLink,
              webUrl: resultLink,
            },
          },
          {
            title: "테스트하기",
            link: {
              mobileWebUrl: homeLink,
              webUrl: homeLink,
            },
          },
        ],
      });
    },
    facebookLink(mbti) {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=https://www.squid-games.site/questions/result/${mbti}&src=sdkpreparse`,
        "pop01",
        "top=10, left=10, width=460, height=600, status=no, menubar=no, toolbar=no, resizable=no"
      );
    },
    twitterLink(resultLink) {
      let text = "저랑 게임 한판 하실래요?";
      window.open(
        `https://twitter.com/intent/tweet?text=${text}&url=${resultLink}`,
        "pop02",
        "top=10, left=10, width=460, height=600, status=no, menubar=no, toolbar=no, resizable=no"
      );
    },
    blurEffect() {
      this.$emit("blurClass");
      this.shareHide = true;
    },
  },
};
</script>

<style scoped>
.container_share_middle {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 999;
  transform: translate(-50%, -50%);
}
.share_box {
  width: 66px;
  font-weight: 700;
  font-size: 18px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  margin-top: 80px;
}
.share_btn {
  width: 196px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
}
.share_box_middle {
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  text-align: center;
  padding-bottom: 12px;
}
.share_hide {
  display: none;
}
</style>
