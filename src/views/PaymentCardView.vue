<template>
  <PaymentCard
    :card-id="($route.params?.id as string) ?? '0'"
  >
  </PaymentCard>
</template>

<script lang="ts">

import store from '@/store';
import PaymentCard from '../components/PaymentCard.vue';
import { DrinkCardType } from '@/types';

export default (await import('vue')).defineComponent({

  components: {
    PaymentCard
  },

  data() {
    return {
      drinkCard: {} as DrinkCardType
    }
  },

  created() {
    this.drinkCard = store.state.currentDrinkCard ??
      store.state.data.filter(
        (item: DrinkCardType) => item.id.toString()  === this.$route.params?.id)[0] as DrinkCardType;
    store.commit('caption', 'Payment')
  },

})

</script>
