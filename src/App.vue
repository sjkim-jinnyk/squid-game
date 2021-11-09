<template>
  <div>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
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
/* router transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
