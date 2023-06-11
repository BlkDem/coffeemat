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

import VerticalLayout from './layouts/VerticalLayout.vue';

export default {
  components: {
    VerticalLayout
  },

  data() {
    return {

    }
  },

  mounted() {
    console.log('Make layout...')
  }
}

</script>

<style lang="scss">
  @import './sass/app.scss';
</style>


