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
@import '@/sass/buttons.scss';

.device{
  width: 350px;
  height: 146px;
  border: 4px solid;
  border-radius: 16px;
}

</style>
