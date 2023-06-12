import { createStore } from "vuex";
import { DrinkCardType } from "@/types";
import { getData } from '@/services/DataRepositoryService';

export default createStore({
  state: {
    page: {
      caption: 'Select a drink'
    },

    drinkCards: [],

    currentDrinkCard: Object,
  },
  getters: {
    getCaption(state) {
      return state.page?.caption;
    },

    getCards(state) {
      return state.drinkCards as DrinkCardType[];
    }
  },
  mutations: {
    caption(state, value) {
      state.page.caption = value
    },

    SET_DATA(state, value) {
      state.drinkCards = value
    },

    SET_CURRENT(state, value) {
      state.currentDrinkCard = value;
    }
  },
  actions: {
    caption({commit}){
      commit('SET_USER', commit)
    },

    async getData({commit}){
      return await getData().then((data)=>{
          commit('SET_DATA', data)
      })
    },

    current({commit}) {
      commit('SET_CURRENT', commit);
    }
  },
  modules: {},
});
