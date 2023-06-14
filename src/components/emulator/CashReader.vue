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
      <button @click="succes" class="c-button">Success</button>
      <button @click="error"  class="c-button">Error</button>
    </div>
</div>
</template>

<script lang="ts">

import store from '@/store';
import { mapActions } from 'vuex';

export default (await import('vue')).defineComponent({

  emits: ['success', 'error'],

  computed: {
    visible() {
      return store.state.emulator.cashReader.active;
    },

    cash() {
      return store.state.emulator.cashReader.value;
    }
  },

  methods: {

    ...mapActions({
      cashValue: 'cashValue',
    }),

    succes() {
      this.$emit('success');
    },

    error() {
      this.$emit('error');
    },

    addMoney(value: number) {
      this.cashValue(store.state.emulator.cashReader.value + value)
    }

  }
})

</script>

<style lang="scss" scoped>
.device{
  width: 350px;
  height: 200px;
  border: 4px solid;
  border-radius: 16px;
}

.led-display {
  display: flex;
  width: 334px;
  height: 48px;
  margin: 8px 8px;
  border-radius: 8px;
  color: #0b0c0d;
  font-size: 1.2rem;
  background-color: #baebf6;
  box-shadow: 0 0 8px 8px var(--coffee-color);
  align-items: center;
  justify-content: center;
  font-family: Consolas, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
  }

  .buttons {
    display: flex;
    justify-content: space-evenly;
  }

  .c-button {
    appearance: none;
    display: flex;
    font-size: 1.2rem;
    background: var(--coffee-color);
    color: var(--main-color);
    margin: 16px 8px;
    padding: 8px 16px;
    font-size: 16px;
    border: 2px solid var(--main-color);
    border-radius: 4px;
    height: 48px;
    width: 150px;
    align-items: center;
    justify-content: center;
  }

  .c-button:hover {
    background: #1d49aa;
  }

.c-button:focus {
  outline: none;
  box-shadow: 0 0 0 4px #cbd6ee;
}

</style>
