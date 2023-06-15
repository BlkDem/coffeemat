<template>
  <div>
    <div id="cards">
        <DrinkCard  v-for="(card, key) in data" :key="key"
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
    data() {
      return store.state.data;
    }
  },

  async mounted() {
    store.commit('caption', 'Select drink')
    store.commit('SET_MILK', 0)
    store.commit('SET_SUGAR', 0)
  },

})
</script>


