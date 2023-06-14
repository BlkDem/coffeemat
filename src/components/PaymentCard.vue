<template>
  <div class="grid-2">
  <div class="card-detail">
    <div class="card-content-detail" style="background-position: center; background-size: 160%;" :style="{
          backgroundImage: `url(${require('@/assets/images/' + drinkCard?.image)})`}">

      <DrinkCardOrder
        :card-name="drinkCard?.name"
        :milk="milk"
        :sugar="sugar"
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
import DrinkCardOrder from './DrinkCardOrder.vue';
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

      payName: 'Insert a payment card',

      drinkCard: {} as DrinkCardType,

      milk: 0,

      sugar: 0

    }
  },

  created() {

    store.commit('caption', 'Payment Card');

    this.cardActive(true);

    this.milk = store.state.milk ?? 0;
    this.sugar = store.state.sugar ?? 0;
    this.drinkCard = store.state.currentDrinkCard ??
      store.state.drinkCards.filter(
        (item: DrinkCardType) => item.id.toString()  === this.cardId)[0] as DrinkCardType;
        // console.log(this.drinkCard)
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
