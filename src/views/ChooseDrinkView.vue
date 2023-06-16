<template>
  <div>
    <div id="cards">
        <GoodCard  v-for="(card, key) in data" :key="key"
          :card-drink="card"
        >
        </GoodCard>
    </div>
  </div>
</template>

<script lang="ts">

import store from '@/store';
import GoodCard from '@/components/GoodCard.vue';
import { DrinkCardType } from '@/types';

export default (await import('vue')).defineComponent({

  components: {
    GoodCard
  },

  computed: {
    data() {
      return store.state.data;
    }
  },

  async mounted() {
    store.commit('caption', 'Select drink');
    store.commit('setMilk', 0);
    store.commit('setSugar', 0);
    store.commit('machineProgress', 0);
    store.commit('setCardReaderStatus', 'Ready to accept card');
    store.commit('setCurrent', {} as DrinkCardType);
  },

})
</script>


