<template>
  <div class="grid-2">
  <div class="card-detail">
    <div class="card-content-detail" style="background-position: center; background-size: 160%;" :style="{
          backgroundImage: `url(${require('@/assets/images/' + drinkCard?.image)})`}">
      <h2>{{ drinkCard?.description }}</h2>
      <!-- <div class="price ">{{ drinkCard.description }}</div> -->
      <div>
        <SelectCount ref="sugar"
          :component-caption="'Sugar'"
          :component-name="'sugar'"
          :max="6"
          :min="0"
          @on-change="addonCountChange"
        ></SelectCount>
        <SelectCount ref="milk"
          :component-caption="'Milk'"
          :component-name="'milk'"
          :max="6"
          :min="0"
          @on-change="addonCountChange"
        ></SelectCount>
      </div>

    </div>
  </div>

  <div class="card-detail">
    <div class="card-content-detail" style="background-position: center; background-size: 120%;" :style="{
          backgroundImage: `url(${require('@/assets/images/money.jpg')})` }">
      <!-- <h2>{{ payName }}</h2> -->


      <router-link :to="'/payment/cash/id=' + cardId">
        <div class="pay-method" style="background-position: center; background-size: 120%;" :style="{
          backgroundImage: `url(${require('@/assets/images/cash.jpg')})` }">
          <h2>Cash</h2>
          <div class="price">{{ drinkCard?.price }} {{ drinkCard?.currency }}</div>
        </div>
      </router-link>

      <router-link :to="'/payment/card/id=' + cardId">
        <div class="pay-method" style="background-position: center; background-size: 120%;" :style="{
          backgroundImage: `url(${require('@/assets/images/card.jpg')})`}">
          <h2>Card</h2>
          <div class="price">{{ drinkCard?.price }} {{ drinkCard?.currency }}</div>
        </div>
      </router-link>

    </div>
  </div>

  </div>
</template>

<script lang="ts">

import store from '@/store';
import { DrinkCardType } from '@/types';
import SelectCount from '@/components/common/SelectCount.vue';

export default (await import('vue')).defineComponent({

  components: {
    SelectCount
  },

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

    this.drinkCard = store.state.currentDrinkCard ??
      store.state.data.filter(
        (item: DrinkCardType) => item.id.toString()  === this.cardId)[0] as DrinkCardType;
  },

  methods: {
    addonCountChange(name: string, value: number) {
      store.commit('SET_' + name.toUpperCase(), value);
    }
  }


})

</script>

<style lang="scss">
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
</style>
