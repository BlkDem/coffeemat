<template>
  <DrinkCardDetail
    :card-id="($route.params?.id as string) ?? '0'"
  >
  </DrinkCardDetail>
</template>

<script lang="ts">

import store from '@/store';
import DrinkCardDetail from '../components/DrinkCardDetail.vue';
import { DrinkCardType } from '@/types';

export default (await import('vue')).defineComponent({

  name: 'drink-card-detail',

  components: {
    DrinkCardDetail
  },

  data() {
    return {
      drinkCard: {} as DrinkCardType
    }
  },

  created() {
      this.drinkCard = store.state.data.filter(
        (item: DrinkCardType) => item.id.toString()  === this.$route.params?.id)[0] as DrinkCardType;
      store.commit('caption', this.drinkCard?.name ?? 'undefined')
      store.commit('SET_CURRENT', this.drinkCard ?? 'undefined')

  },

  // beforeUnmount() {
  //     this.drinkCard = {} as DrinkCardType;
  // },

})

</script>
