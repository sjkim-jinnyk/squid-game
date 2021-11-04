<template>
  <!-- <Main msg="Welcome to Your Vue.js App" /> -->
  <!-- <Tutorial /> -->
  <!-- <Question_1 /> -->
  <!-- <Question_2 /> -->
  <Question_common />
</template>

<script>
// import Main from "./components/Main.vue";
// import Tutorial from './components/Tutorial.vue';
// import Question_1 from "./components/Question_1.vue";
// import Question_2 from "./components/Question_2.vue";
import Question_common from "./components/Question_common.vue";

export default {
  name: "App",
  components: {
    // Main,
    // Question_2,
    Question_common,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
