export const state = () => ({
  autoTime: [],
});

export const mutations = {
  setTimer(state, data) {
    state.autoTime.push(data);
  },
  clearTimer(state) {
    for (const i of state.autoTime) {
      clearTimeout(i);
    }
    state.autoTime = [];
  },
};
