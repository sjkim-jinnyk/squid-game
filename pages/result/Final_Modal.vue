<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <p class="headerText">All the results</p>
          <i class="fas fa-times" @click="closeModal()"></i>
        </div>
        <main class="finalModal">
          <article class="mbtiType" @click="typeLink('ENFP')">
            <img
              src="~/assets/image/final/성기훈_ENFP_200.png"
              alt="성기훈 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">Player 456</p>
              </section>
              <p class="charSummary">
                Passionate,<br />
                active and creative.
              </p>
            </section>
          </article>
          <article class="mbtiType" @click="typeLink('INFJ')">
            <img
              src="~/assets/image/final/오일남_INFJ_200.png"
              alt="오일남 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">Player 001</p>
              </section>
              <p class="charSummary">
                creative and insightful.<br />
                An original character.
              </p>
            </section>
          </article>
          <article class="mbtiType" @click="typeLink('ENTJ')">
            <img
              src="~/assets/image/final/조상우_ENTJ_200.png"
              alt="조상우 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">Player 218</p>
              </section>
              <p class="charSummary">
                As a strategist, takes<br />
                care of practical things.<br />
                Leader-type person.
              </p>
            </section>
          </article>
          <article class="mbtiType" @click="typeLink('ESTP')">
            <img
              src="~/assets/image/final/장덕수_ESTP_200.png"
              alt="장덕수 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">Player 101</p>
              </section>
              <p class="charSummary">
                interested in various fields.<br />
                An active person.
              </p>
            </section>
          </article>
          <article class="mbtiType" @click="typeLink('INFP')">
            <img
              src="~/assets/image/final/강새벽_INFP_200.png"
              alt="강새벽 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">Player 067</p>
              </section>
              <p class="charSummary">
                values belief<br />
                and harmony. An idealist.
              </p>
            </section>
          </article>
          <article class="mbtiType" @click="typeLink('ESFP')">
            <img
              src="~/assets/image/final/한미녀_ESFP_200.png"
              alt="한미녀 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">Player 212</p>
              </section>
              <p class="charSummary">
                Realistic and practical.<br />
                A sociable person./p>
              </p>
            </section>
          </article>
          <article class="mbtiType" @click="typeLink('ISTJ')">
            <img
              src="~/assets/image/final/황준호_ISTJ_200.png"
              alt="황준호 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">Detective Hwang</p>
              </section>
              <p class="charSummary">
                do what he started to do<br />
                until the end. A perfectionist.
              </p>
            </section>
          </article>
          <article class="mbtiType" @click="typeLink('ISTP')">
            <img
              src="~/assets/image/final/프런트맨_ISTP_200.png"
              alt="프런트맨 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">Front Man</p>
              </section>
              <p class="charSummary">
                Logical and objective.<br />
                Encyclopedia-type person.
              </p>
            </section>
          </article>
          <article class="mbtiType" @click="typeLink('ISFJ')">
            <img
              src="~/assets/image/final/성기훈어머니_ISFJ_200.png"
              alt="성기훈어머니 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">Player 456’ mother</p>
              </section>
              <p class="charSummary">
                responsible and dedicated.<br />
                A patient person.
              </p>
            </section>
          </article>
          <article class="mbtiType" @click="typeLink('ESTJ')">
            <img
              src="~/assets/image/final/VIP_ESTJ_200.png"
              alt="VIPS 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">VIPS</p>
              </section>
              <p class="charSummary">
                so good at planning.<br />
                A businessman-type person.
              </p>
            </section>
          </article>
          <article class="mbtiType" @click="typeLink('ENTP')">
            <img
              src="~/assets/image/final/의문남_ENTP_200.png"
              alt="의문남 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">Salesman</p>
              </section>
              <p class="charSummary">
                Full of confidence and energy.<br />
                Innovative person.
              </p>
            </section>
          </article>
          <article class="mbtiType" @click="typeLink('ENFJ')">
            <img
              src="~/assets/image/final/알리_ENFJ_200.png"
              alt="알리 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">Player 199</p>
              </section>
              <p class="charSummary">
                makes people happy.<br />
                A kind person.
              </p>
            </section>
          </article>
          <article class="mbtiType" @click="typeLink('ISFP')">
            <img
              src="~/assets/image/final/지영_ISFP_200.png"
              alt="지영 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">Player 240</p>
              </section>
              <p class="charSummary">
                very sentimental.<br />
                A person who is independent.
              </p>
            </section>
          </article>
          <article class="mbtiType" @click="typeLink('INTP')">
            <img
              src="~/assets/image/final/진행요원_INTP_200.png"
              alt="진행요원 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">Soldier (ㅁ)</p>
              </section>
              <p class="charSummary">
                quick to understand<br />
                insightful. Idea-type person.
              </p>
            </section>
          </article>
          <article class="mbtiType" @click="typeLink('ESFJ')">
            <img
              src="~/assets/image/final/조상우맘_ESFJ_200.png"
              alt="조상우맘 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">Player 218’s Mother</p>
              </section>
              <p class="charSummary">
                sympathetic and patient. <br />
                Conscientious person.
              </p>
            </section>
          </article>
          <article class="mbtiType" @click="typeLink('INTJ')">
            <img
              src="~/assets/image/final/주최자_INTJ_200.png"
              alt="주최자 이미지"
              class="typeImg"
            />
            <section class="charInfo">
              <section class="typeInfo">
                <p class="charName">Game Host</p>
              </section>
              <p class="charSummary">
                Creative in thinking<br />
                and behavior.
              </p>
            </section>
          </article>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      close: true,
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModal", !this.close);
    },
    typeLink(type) {
      this.$router.push({
        path: `${type}?firstTest=true`,
      });
    },
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  transition: opacity 0.3s ease;
  overflow: auto;
}
.modal-wrapper {
  vertical-align: middle;
}
.modal-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: black;
  transition: all 0.3s ease;
  color: white;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 40px;
}

.modal-default-button {
  float: right;
}
.mbtiType {
  display: flex;
  margin-left: 32px;
  margin-bottom: 40px;
  cursor: pointer;
}
.charInfo {
  font-size: 14px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.charSummary {
  letter-spacing: -0.02em;
  font-weight: 400;
  line-height: 21px;
}
.typeInfo {
  display: flex;
  margin-bottom: 8px;
}
.charType {
  font-size: 12px;
  color: #e73e7e;
  padding-left: 8px;
  padding-top: 1px;
}
.charName {
  font-weight: 700;
  font-size: 14px;
}
.typeImg {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}
</style>
