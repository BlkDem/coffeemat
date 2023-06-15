<template>
  <VerticalLayout>

    <template v-slot:main>
      <router-view />
    </template>

    <template v-slot:info>

    </template>
  </VerticalLayout>

</template>

<script lang="ts">

import {mapActions} from 'vuex';
import VerticalLayout from './layouts/VerticalLayout.vue';

export default (await import('vue')).defineComponent({
  components: {
    VerticalLayout
  },

  data() {
    return {
      page:{
        caption:"",
      },
    }
  },

  async mounted() {
    await this.getData('cache');
  },

  methods: {
    ...mapActions({
      getData: 'getData',
    }),
  }

})

</script>

<style lang="scss">
  @import './sass/app.scss';
</style>


