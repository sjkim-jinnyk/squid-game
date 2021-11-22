<template>
  <article>
    <p class="share_box">공유하기</p>
    <div class="share_btn">
      <button @click="urlLink(resultLink)">
        <img src="/image/linkshare_btn.svg" />
      </button>
      <button @click="kakaoLink(resultLink, homeLink)">
        <img src="/image/kakao.svg" />
      </button>
      <button @click="facebookLink(mbti)">
        <img src="/image/facebook.svg" />
      </button>
      <button class="twitter-share-button" @click="twitterLink(resultLink)">
        <img src="/image/twitter.svg" />
      </button>
    </div>
  </article>
</template>

<script>
export default {
  props: ["resultLink", "homeLink", "mbti"],
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
  },
};
</script>

<style></style>
