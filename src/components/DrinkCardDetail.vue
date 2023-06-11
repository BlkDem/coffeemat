<template>
  <div class="card-detail">
    <div class="card-content-detail" style="background-position: center; background-size: 120%;" :style="{
          backgroundImage: `url(${require('@/assets/images/' + cardImage)})`
        }">
      <h2>{{ cardName }}</h2>
      <div class="price">{{ cardPrice }}</div>
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

    cardImage: {
      type: String,
    },

  }


})

</script>

<style lang="scss">
@import '@/sass/cards.scss';
</style>
