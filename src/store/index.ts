import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'
import { DrinkCardType, Emulator} from "@/types";
import { getData } from '@/services/DataRepositoryService';

export default createStore({

  state: {
    //page caption
    page: {
      caption: 'Select a drink'
    },

    //drinks db
    drinkCards: [],

    //selected drnk
    currentDrinkCard: {} as DrinkCardType,

    //addons
    milk: 0,
    sugar: 0,

    emulator: {
      cardReader: {
        active: false,
        value: 0,
      },
      cashReader: {
        active: false,
        value: 0,
      },
    }


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
    },

    emulatorState(state) {
      return state;
    },

    cardReaderState(state) {
      return state.emulator.cardReader.active;
    },

    cashReaderState(state) {
      return state.emulator.cashReader.active;
    },

    cardReaderValue(state) {
      return state.emulator.cardReader.value;
    },

    cashReaderValue(state) {
      return state.emulator.cashReader.value;
    },

  },

  mutations: {
    caption(state, value) {
      state.page.caption = value
    },

    SET_DATA(state, value) {
      state.drinkCards = value
    },

    SET_CURRENT(state, value) {
      console.log('set_current', value)
      state.currentDrinkCard = value;
    },

    SET_MILK(state, value) {
      state.milk = value;
    },

    SET_SUGAR(state, value) {
      state.sugar = value;
    },

    setEmulator(state, value) {
      state = value
    },

    setCashReaderActive(state, value) {
      state.emulator.cashReader.active = value
    },

    setCardReaderActive(state, value) {
      state.emulator.cardReader.active = value
    },

    setCashReaderValue(state, value) {
      console.log(state, value)
      state.emulator.cashReader.value = value
    },

    setCardReaderValue(state, value) {
      state.emulator.cardReader.value = value
    },

  },

  actions: {

    caption({commit}){
      commit('caption', commit)
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
    },

    cardValue({ commit }, value){
      commit('setCardReaderValue', value)
    },

    cashValue({ commit }, value){
      commit('setCashReaderValue', value)
    },

    cashActive({ commit }, value){
      commit('setCashReaderActive', value)
    },

    cardActive({ commit }, value){
      commit('setCardReaderActive', value)
    },

  },

  modules: {
  },

  plugins:[
    createPersistedState()
  ],
});
