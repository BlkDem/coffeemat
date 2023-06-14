<template>
  <div>
    <h2>Current Drink</h2>
    <ul>
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
      <li>CashReader.Active:
        <span :class="{'active': emulator.cashReader.active, 'not-active': !emulator.cashReader.active}">
          {{ emulator.cashReader.active }}
        </span>
      </li>
      <li>CardReader.Value:
        <span :class="{'active': emulator.cardReader.value > 0, 'not-active': !(emulator.cardReader.value > 0)}">
          {{ emulator.cardReader.value }}
        </span>
      </li>
      <li>CashReader.Value:
        <span :class="{'active': emulator.cashReader.value > 0, 'not-active': !(emulator.cashReader.value > 0)}">
          {{ emulator.cashReader.value }}
        </span>
      </li>
    </ul>

  </div>
</template>

<script lang="ts">
import store from '@/store';
import {mapActions} from 'vuex';

export default (await import('vue')).defineComponent({

  data() {
    return {}
  },

  computed: {

    currentDrink(){
      return store.state.currentDrinkCard;
    },

    milk() {
      return store.state.milk;
    },

    sugar() {
      return store.state.sugar;
    },

    emulator() {
      return store.state.emulator;
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
    }),
  }

})

</script>

<style lang="scss" scoped>
.active {
  color: green;
}
.not-active {
  color: red;
}
</style>

