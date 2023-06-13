<template>
  <div class="grid-2">
  <div class="card-detail">
    <div class="card-content-detail" style="background-position: center; background-size: 160%;" :style="{
          backgroundImage: `url(${require('@/assets/images/' + drinkCard?.image)})`}">
      <h2>{{ drinkCard?.description }}</h2>
      <!-- <div class="price ">{{ drinkCard.description }}</div> -->
    </div>
  </div>

  <div class="card-detail">
    <div class="card-content-detail" style="background-position: center; background-size: 120%;" :style="{
          backgroundImage: `url(${require('@/assets/images/money.jpg')})` }">

      <h2>{{ payName }}</h2>

      <div class="sum left-gradient">
        <h1>{{ drinkCard.price }} {{ drinkCard.currency }}</h1>
      </div>


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

      payName: 'Insert a payment card',

      drinkCard: {} as DrinkCardType,

    }
  },

  created() {
      this.drinkCard = store.state.drinkCards.filter(
        (item: DrinkCardType) => item.id.toString()  === this.cardId)[0] as DrinkCardType;
        console.log(this.drinkCard)
  },


})

</script>

<style lang="scss" scoped>
@import '@/sass/cards.scss';

.pay-method {
  cursor: pointer;
  display: grid;
  height: 192px;
  border-radius: 0.75em;
  padding: 16px 16px;
  box-shadow: 0px 0px 16px var(--coffee-color);
  align-content: space-between;
}

h1 {
  font-size: 8rem;
  text-align: right;
}

.sum {
  height: 215px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
