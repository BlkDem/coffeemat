<template>
  <div>
    <div id="cards">
        <DrinkCard  v-for="(card, key) in drinkCards" :key="key"
          :card-drink="card"
        >
        </DrinkCard>
    </div>
  </div>
</template>

<script lang="ts">

import store from '@/store';
import DrinkCard from '@/components/DrinkCard.vue';

export default (await import('vue')).defineComponent({

  components: {
    DrinkCard
  },

  computed: {
    drinkCards() {
      return store.state.drinkCards;
    }
  },

  async mounted() {
    store.commit('caption', 'Select a drink')
  },

})
</script>


