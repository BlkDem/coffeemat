<template>
    <h2>Your order</h2>
    <div class="coffee-cup shadow-blur-16 opacity-09">
        <font-awesome-icon :icon="['fas', 'mug-hot']" size="2xl"/>
    </div>
    <div>

      <h2>{{ cardName }}</h2>

      <h3 v-if="sugar>0" class="left-gradient">Sugar: +{{ sugar }}</h3>
      <h3 v-if="milk>0" class="left-gradient">Milk: +{{ milk }}</h3>

    </div>
</template>

<script lang="ts">

export default (await import('vue')).defineComponent({

  props: {
    cardName: {
      type: String,
      default: 'Card Name'
    },

    sugar: {
      type: Number,
      default: 0
    },

    milk: {
      type: Number,
      default: 0
    },
  }

})

</script>

<style lang="scss" scoped>
  @import '@/sass/cards.scss';
</style>
