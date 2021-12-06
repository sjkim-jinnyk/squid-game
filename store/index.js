export const state = () => ({
  autoTime: [],
});

export const mutations = {
  setTime(state, data) {
    state.autoTime = data;
  },
};
