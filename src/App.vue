<template>
  <!-- <Main msg="Welcome to Your Vue.js App" /> -->
  <!-- <Tutorial /> -->
  <!-- <Final_ENFP /> -->
  <!-- <Final_ESFP /> -->
  <TestLoading />
  <!-- <Final_Result /> -->
</template>

<script>
//import Main from "./components/Main.vue";
// import Tutorial from './components/Tutorial.vue';
// import Question_common from "./components/Question_common.vue";
// import Final_ESFP from "./components/Final_ESFP.vue";
// import Final_ENFP from "./components/Final_ENFP.vue";
import TestLoading from "./components/TestLoading.vue";
// import Final_Result from "./components/Final_Result.vue";

export default {
  name: "App",
  components: {
    //Main,
    //Question_2,
    // Final_ENFP,
    // Final_ESFP,
    TestLoading,
    //Question_common,
    // Final_Result,
  },
};
</script>

<style>
@import "./css/reset.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
