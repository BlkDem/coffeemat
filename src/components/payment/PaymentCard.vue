<template>
  <div class="grid-2">
  <div class="card-detail">
    <div class="card-content-detail" style="background-position: center; background-size: 160%;" :style="{
          backgroundImage: `url(${require('@/assets/images/' + drinkCard?.image)})`}">

      <DrinkCardOrder
        :card-name="drinkCard?.name"
        :milk="addons.milk"
        :sugar="addons.sugar"
      ></DrinkCardOrder>

    </div>
  </div>

  <div class="card-detail">
    <div class="card-content-detail" style="background-position: center; background-size: 120%;" :style="{
          backgroundImage: `url(${require('@/assets/images/money.jpg')})` }">
          <h2>{{ payName }}</h2>
          <div class="coffee-cup shadow-blur-16">
            <font-awesome-icon :icon="['far', 'credit-card']" beat-fade size="xl"/>
          </div>
          <PaySum
            :pay-name="'Sum to pay'"
            :pay-sum="drinkCard?.price"
            :pay-curr="drinkCard?.currency"
          />

    </div>
  </div>

  </div>
</template>

<script lang="ts">

import store from '@/store';
import { mapActions } from 'vuex';
import { DrinkCardType } from '@/types';
import DrinkCardOrder from '@/components/DrinkCardOrder.vue';
import PaySum from './PaySum.vue';

export default (await import('vue')).defineComponent({

  components: {
    DrinkCardOrder,
    PaySum,
  },

  props: {
    cardId: {
      type: String,
    },
  },

  data() {
    return {

      payName: 'Insert payment card',

      drinkCard: {} as DrinkCardType,

      addons: {
        milk: 0,
        sugar: 0
      }
    }
  },

  created() {

    store.commit('caption', 'Payment Card');

    this.cardActive(true);

    this.addons.milk = store.state.addons.milk ?? 0;
    this.addons.sugar = store.state.addons.sugar ?? 0;

    this.drinkCard = store.state.currentDrinkCard ??
      store.state.data.filter(
        (item: DrinkCardType) => item.id.toString()  === this.cardId)[0] as DrinkCardType;
  },

  beforeUnmount() {
    this.cardActive(false);
  },

  methods: {
    ...mapActions({
      cardActive: 'cardActive',
    }),

  }


})

</script>

<style lang="scss" scoped>
@import '@/sass/cards.scss';


</style>
