<template>
  <div class="device" v-if="visible">
    <div class="led-display">{{ cash }}</div>
    <div class="buttons">
      <button @click="addMoney(10)" class="c-button">10</button>
      <button @click="addMoney(50)" class="c-button">50</button>
      <button @click="addMoney(100)" class="c-button">100</button>
      <button @click="addMoney(200)" class="c-button">200</button>
    </div>
    <div class="buttons">
      <button @click="pay" class="c-button"
        :disabled='(cash.toString() < drinkCost)'>Pay</button>
      <button @click="cancel"  class="c-button">Cancel</button>
    </div>
</div>
</template>

<script lang="ts">

import store from '@/store';
import { mapActions } from 'vuex';

export default (await import('vue')).defineComponent({

  emits: ['pay', 'cancel', 'addCash'],

  computed: {
    visible() {
      return store.state.emulator.cashReader.active;
    },

    cash() {
      return store.state.emulator.cashReader.value;
    },

    drinkCost() {
      return store.state.currentDrinkCard.price;
    }

  },

  methods: {

    ...mapActions({
      cashValue: 'cashValue',
    }),

    pay() {
      this.$emit('pay');
    },

    cancel() {
      this.$emit('cancel');
    },

    addMoney(value: number) {
      this.$emit('addCash', value);
    }
  },

})

</script>

<style lang="scss" scoped>

@import '@/sass/led.scss';
@import '@/sass/buttons.scss';


  .device{
    width: 350px;
    height: 222px;
    border: 4px solid;
    border-radius: 16px;
  }


</style>
