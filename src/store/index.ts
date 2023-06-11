import { createStore } from "vuex";

export default createStore({
  state: {
    page: {
      caption: 'Select a drink'
    }
  },
  getters: {
    getCaption(state) {
      return state.page?.caption;
    }
  },
  mutations: {
    caption(state, value) {
      state.page.caption = value
    }
  },
  actions: {
    caption({commit}){
      commit('SET_USER', commit)
    }
  },
  modules: {},
});
