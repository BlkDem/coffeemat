<template>
  <div class="grid-2">
  <div class="card-detail">
    <div class="card-content-detail" style="background-position: center; background-size: 160%;" :style="{
          backgroundImage: `url(${require('@/assets/images/' + drinkCard?.image)})`}">
      <h2>{{ drinkCard.name }}</h2>
      <div class="price"></div>
    </div>
  </div>

  <div class="card-detail">
    <div class="card-content-detail" style="background-position: center; background-size: 120%;" :style="{
          backgroundImage: `url(${require('@/assets/images/money.jpg')})` }">
      <!-- <h2>{{ payName }}</h2> -->


      <router-link :to="'/'">
        <div class="pay-method" style="background-position: center; background-size: 120%;" :style="{
          backgroundImage: `url(${require('@/assets/images/cash.jpg')})` }">
          <h2>Cash</h2>
          <div class="price">{{ drinkCard.price }} {{ drinkCard.currency }}</div>
        </div>
      </router-link>

      <router-link :to="'/'">
        <div class="pay-method" style="background-position: center; background-size: 120%;" :style="{
          backgroundImage: `url(${require('@/assets/images/card.jpg')})`}">
          <h2>Card</h2>
          <div class="price">{{ drinkCard.price }} {{ drinkCard.currency }}</div>
        </div>
      </router-link>


      <!-- <div class="price">{{ cardPrice }} {{ cardCurrency }}</div> -->
    </div>
  </div>

  </div>
</template>

<script lang="ts">

import store from '@/store';
import { DrinkCardType } from '@/types';

export default (await import('vue')).defineComponent({

  props: {
    cardId: {
      type: String,
    },
  },

  data() {
    return {
      payName: 'Payment Methods',

      drinkCard: {} as DrinkCardType,

    }
  },

  created() {
      this.drinkCard = store.state.drinkCards.filter(
        (item: DrinkCardType) => item.id.toString()  === this.cardId)[0] as DrinkCardType;
  },


})

</script>

<style lang="scss">
@import '@/sass/cards.scss';

.grid-2 {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
}

.pay-method {
  cursor: pointer;
  display: grid;
  height: 192px;
  border-radius: 0.75em;
  padding: 16px 16px;
  box-shadow: 0px 0px 16px var(--coffee-color);
  align-content: space-between;}
</style>
