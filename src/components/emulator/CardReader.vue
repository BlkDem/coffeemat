<template>
  <div class="device" v-if="visible">
    <div class="led-display">Ready to accept card</div>
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
      return store.state.emulator.cardReader.active;
    }
  },

  methods: {

    ...mapActions({
      cardValue: 'cardValue',
    }),

    succes() {
      this.$emit('success');
    },

    error() {
      this.$emit('error');
    },
  },

  beforeUnmount() {
    this.cardValue(0);
  },
})

</script>

<style lang="scss" scoped>

@import '@/sass/led.scss';

.device{
  width: 350px;
  height: 146px;
  border: 4px solid;
  border-radius: 16px;
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
