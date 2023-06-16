<template>
  <MainLayout>

    <template v-slot:main>
      <router-view />
    </template>

    <template v-slot:info>

    </template>
  </MainLayout>

</template>

<script lang="ts">

import {mapActions} from 'vuex';
import MainLayout from './layouts/MainLayout.vue';

export default (await import('vue')).defineComponent({
  components: {
    MainLayout
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


