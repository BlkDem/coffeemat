<template>
  <div class="grid-2">
  <div class="card-detail">
    <div class="card-content-detail" style="background-position: center; background-size: 120%;" :style="{
          backgroundImage: `url(${require('@/assets/images/' + cardImage)})`
        }">
      <h2>{{ cardName }}</h2>
      <div class="price">{{ cardPrice }} {{ cardCurrency }}</div>
    </div>
  </div>

  <div class="card-detail">
    <div class="card-content-detail" style="background-position: center; background-size: 120%;" :style="{
          backgroundImage: `url(${require('@/assets/images/money.jpg')})`
        }">
      <h2>{{ payName }}</h2>
      <div class="pay-method" style="background-position: center; background-size: 120%;" :style="{
          backgroundImage: `url(${require('@/assets/images/cash.jpg')})`
        }">

      </div>
      <div class="pay-method" style="background-position: center; background-size: 120%;" :style="{
          backgroundImage: `url(${require('@/assets/images/card.jpg')})`
        }">

      </div>
      <!-- <div class="price">{{ cardPrice }} {{ cardCurrency }}</div> -->
    </div>
  </div>

  </div>
</template>

<script lang="ts">

export default (await import('vue')).defineComponent({

  props: {
    cardId: {
      type: String,
    },

    cardName: {
      type: String || undefined,
    },

    cardPrice: {
      type: String,
    },

    cardCurrency: {
      type: String,
    },

    cardImage: {
      type: String,
    },

  },

  data() {
    return {
      payName: 'Payment Methods'
    }
  }


})

</script>

<style lang="scss">
@import '@/sass/cards.scss';

.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.pay-method {
  width: 100%;
  height: 190px;
  border-radius: 0.75em;
  box-shadow: 0px 0px 16px var(--coffee-color);
}
</style>
