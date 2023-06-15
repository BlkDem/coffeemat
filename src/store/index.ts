import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'

import { DrinkCardType } from "@/types";
import { getData } from '@/services/DataRepositoryService';

export default createStore({

  state: {
    //page caption
    page: {
      caption: 'Select drink'
    },

    //drinks db
    data: [] as DrinkCardType[],

    //selected drnk
    currentDrinkCard: {} as DrinkCardType,

    //addons
    milk: 0,
    sugar: 0,

    //emulator
    emulator: {
      cardReader: {
        active: false,
        value: '',
        status: ''
      },
      cashReader: {
        active: false,
        value: '',
        status: ''
      },
    }
  },

  getters: {
    getCaption(state) {
      return state.page?.caption;
    },

    getCards(state) {
      return state.data as DrinkCardType[];
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

    cardReaderStatus(state) {
      return state.emulator.cardReader.status;
    },

    cashReaderStatus(state) {
      return state.emulator.cashReader.status;
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
      state.data = value
    },

    SET_CURRENT(state, value) {
      // console.log('set_current', value)
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
      state.emulator.cashReader.value = value
    },

    setCardReaderValue(state, value) {
      state.emulator.cardReader.value = value
    },

    setCardReaderStatus(state, value) {
      state.emulator.cardReader.status = value
    },

    setCashReaderStatus(state, value) {
      state.emulator.cashReader.status = value
    },

  },

  actions: {

    async getData({commit}, value){
      return await getData(value).then((data)=>{
          commit('SET_DATA', data)
      })
    },

    caption({commit}){
      commit('caption', commit)
    },

    milk({commit}){
      commit('SET_MILK', commit)
    },

    sugar({commit}){
      commit('SET_SUGAR', commit)
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

    cardStatus({ commit }, value){
      commit('setCardReaderStatus', value)
    },

    cashStatus({ commit }, value){
      commit('setCashReaderStatus', value)
    },

  },

  modules: {
  },

  plugins:[
    createPersistedState()
  ],
});
