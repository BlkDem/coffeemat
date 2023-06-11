<template>
  <DrinkCardDetail
    :card-id="($route.params?.id as string)"
    :card-name="($route.params?.name as string)"
    :card-price="($route.params?.price as string)"
    :card-image="($route.params?.image as string)"
  >

  </DrinkCardDetail>
</template>

<script lang="ts">

import DrinkCardDetail from '../components/DrinkCardDetail.vue';
import type { DrinkCardType } from '../types';

export default (await import('vue')).defineComponent({

  components: {
    DrinkCardDetail
  },

  data() {
    return {

    }
  },

  beforeMount() {

      // console.log(this.$route.params.name);

  },

  // props: {
  //   drinkCard: {
  //     type: Object,
  //   }
  // }

})

</script>
