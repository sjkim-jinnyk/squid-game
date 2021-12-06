export const state = () => ({
  autoTime: [],
});

export const mutations = {
  setTime(state, data) {
    state.autoTime.push(data);
    console.log(data, "dddd");
  },
  clearTime(state) {
    if (state.autoTime) {
      for (const i of state.autoTime) {
        clearTimeout(i);
      }
      console.log("clearTimeeeee", state.autoTime);
      state.autoTime = [];
      console.log("clearTime", state.autoTime);
    }
  },
};
