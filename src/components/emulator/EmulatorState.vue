<template>
  <div class="emulator">
    <h2>Current Drink</h2>
    <ul  v-if="currentDrink?.id >= 0">
      <li>
        {{ currentDrink.id }} {{ currentDrink.name }}
      </li>
      <li>
        {{ currentDrink.description }}
      </li>
      <li>
        {{ currentDrink.price }} {{ currentDrink.currency }}
      </li>
      <li v-if="sugar > 0">
        Sugar: {{ sugar }}
      </li>
      <li v-if="milk > 0">
        Milk: {{ milk }}
      </li>
    </ul>
    <h2>HW State</h2>
    <ul>
      <li>CardReader.Active:
        <span :class="{'active': emulator.cardReader.active, 'not-active': !emulator.cardReader.active}">
          {{ emulator.cardReader.active }}
        </span>
      </li>
      <li>CardReader.Value:
        <span :class="{'active': emulator.cardReader.value != '', 'not-active': (!emulator.cardReader.value)}">
          {{ emulator.cardReader.value }}
        </span>
      </li>
      <li>CashReader.Active:
        <span :class="{'active': emulator.cashReader.active, 'not-active': !emulator.cashReader.active}">
          {{ emulator.cashReader.active }}
        </span>
      </li>
      <li>CashReader.Value:
        <span :class="{'active': emulator.cashReader.value != '', 'not-active': (!emulator.cashReader.value)}">
          {{ emulator.cashReader.value }}
        </span>
      </li>

      <li v-if="cash">Cache.Status:
          {{ cash }}
      </li>

      <li>Machine.Active:
        <span :class="{'active': machineActive, 'not-active': !machineActive}">
          {{ machineActive }}
        </span>
      </li>
      <li>Machine.Progress:
          {{ machineProgress }}
      </li>
    </ul>
    <CardReader
      @success="onCardSuccess"
      @error="onCardError"
    />
    <CashReader
      @pay="onCashPay"
      @cancel="onCashCancel"
      @add-cash="onAddCash"
    />
  </div>
</template>

<script lang="ts">

import store from '@/store';
import {mapActions} from 'vuex';
import CardReader from './CardReader.vue';
import CashReader from './CashReader.vue';
import { Emulator } from './emulator';
import router from '@/router';

let e1 = new Emulator();

export default (await import('vue')).defineComponent({

  components: { CardReader, CashReader },

  data() {
    return {
      // emulator: {}
    }
  },

  computed: {

    currentDrink(){
      return store.state.currentDrinkCard;
    },

    milk() {
      return store.state.addons.milk;
    },

    sugar() {
      return store.state.addons.sugar;
    },

    emulator() {
      return store.state.emulator;
    },

    machineProgress() {
      return store.state.machine.progress;
    },

    machineActive() {
      return store.state.machine.active;
    },

    cash() {
      return store.state.emulator.cashReader.status;
    }
  },

  async created() {
    await this.cardValue(0);
    await this.cashValue(0);
    await this.cashActive(false);
    await this.cardActive(false);
  },

  methods: {
    ...mapActions({
      cardValue: 'cardValue',
      cashValue: 'cashValue',
      cashActive: 'cashActive',
      cardActive: 'cardActive',
      cardStatus: 'cardStatus',
      cashStatus: 'cashStatus',
      textInfo: 'textInfo',
    }),

    onCardError() {
      e1.payCardError((value) => {
        console.log(value);
        setTimeout(()=>{
          this.textInfo('Card payment error!');
          router.push('/info');
          this.cardStatus('Insert payment card');
        }, 2000)
      })
    },

    async onCardSuccess() {
      await e1.payCardSuccess((value) => {
        console.log('oga',value);
      })

      store.commit('machineProgress', 1);

      router.push('/prepare');

      await e1.prepareDrink((value)=>{
        // console.log('drink ready:', value);
        router.push('/ready');
      })

    },

    onCashCancel() {
      if (parseInt(store.state.emulator.cashReader.value ?? 0) > 0) {
        this.cashValue('Money back');
        setTimeout(() => {
          // this.cashStatus('');
          this.cashValue(0);
          router.push('/');
        }, 2000)
      }
      this.cashStatus
      e1.payCashCancel((value) => {
        console.log(value);
      })
    },

    onCashPay() {
      e1.payCashPay((value) => {

        store.commit('machineProgress', 1);
        router.push('/prepare');

        e1.prepareDrink((value)=>{
          this.cashValue(0);
          router.push('/ready');
        })

      })
    },

    onAddCash(value: number) {
      this.cashValue(parseInt(store.state.emulator.cashReader.value) + value)
    }

  }

})

</script>

<style lang="scss" scoped>

.emulator {
  font-family: 'Robo';
}
.active {
  color: green;
}
.not-active {
  color: red;
}
</style>

