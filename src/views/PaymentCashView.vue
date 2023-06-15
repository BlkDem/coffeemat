<template>
  <PaymentCash
    :card-id="($route.params?.id as string) ?? '0'"
  >
  </PaymentCash>
</template>

<script lang="ts">

import store from '@/store';
import PaymentCash from '../components/payment/PaymentCash.vue';
import { DrinkCardType } from '@/types';

export default (await import('vue')).defineComponent({

  components: {
    PaymentCash
  },

  data() {
    return {
      drinkCard: {} as DrinkCardType
    }
  },

  created() {
    this.drinkCard = store.state.data.filter(
        (item: DrinkCardType) => item.id.toString()  === this.$route.params?.id)[0] as DrinkCardType;
    store.commit('caption', 'Payment')
  },

})

</script>
