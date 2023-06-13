import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'
import { DrinkCardType } from "@/types";
import { getData } from '@/services/DataRepositoryService';

export default createStore({
  state: {
    page: {
      caption: 'Select a drink'
    },

    drinkCards: [],
    currentDrinkCard: Object,
    milk: 0,
    sugar: 0,

  },
  getters: {
    getCaption(state) {
      return state.page?.caption;
    },

    getCards(state) {
      return state.drinkCards as DrinkCardType[];
    },

    milk(state) {
      return state.milk;
    },

    sugar(state) {
      return state.sugar;
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
    },

    SET_MILK(state, value) {
      state.milk = value;
    },

    SET_SUGAR(state, value) {
      state.sugar = value;
    }
  },
  actions: {

    caption({commit}){
      commit('SET_USER', commit)
    },

    milk({commit}){
      commit('SET_MILK', commit)
    },

    sugar({commit}){
      commit('SET_SUGAR', commit)
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

  plugins:[
    createPersistedState()
  ],
});
