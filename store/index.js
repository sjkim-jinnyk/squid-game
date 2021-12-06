export const state = () => ({
  autoTime: null,
  autoTime2: null,
});

export const mutations = {
  setTime(state, data) {
    state.autoTime = data;
  },
  setTime2(state, data) {
    state.autoTime2 = data;
    console.log(state.autoTime2);
  },
};
