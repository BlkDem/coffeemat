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
    store.commit('caption', 'Select drink')
    store.commit('SET_MILK', 0)
    store.commit('SET_SUGAR', 0)
  },

})
</script>


