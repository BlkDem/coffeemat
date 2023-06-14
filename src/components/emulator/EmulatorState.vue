<template>
  <div>
    <h2>State</h2>
    <ul>
      <li>CardReader.active: {{ emulator.cardReader.active }}</li>
      <li>CashReader.active: {{ emulator.cashReader.active }}</li>
    </ul>
    <h2>Current Drink</h2>
      <ul>
        <li>
          {{ currentDrink }}
        </li>
      </ul>

  </div>
</template>

<script lang="ts">
import store from '@/store';
import { DrinkCardType } from '@/types';
import {mapActions} from 'vuex';
// import store from './store';

export default (await import('vue')).defineComponent({

  data() {
    return {

      currentDrink: {
        id: 0,
        name: '',
        description: '',
        image: '',
        price: '',
        currency: ''
      } as DrinkCardType,

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

    }
  },

  async created() {
    await this.cardValue(0);
    await this.cashValue(0);
    await this.cashActive(true);
    await this.cardActive(false);

    const { currentDrinkCard } = store.state

    // console.log(currentDrinkCard);

    this.currentDrink = currentDrinkCard;
  },

  methods: {
    ...mapActions({
      cardValue: 'cardValue',
      cashValue: 'cashValue',
      cashActive: 'cashActive',
      cardActive: 'cardActive',
    }),
  }

})

</script>

