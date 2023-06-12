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

// import store from './store';
// import {mapActions} from 'vuex';
import VerticalLayout from './layouts/VerticalLayout.vue';

export default {
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

  methods: {
    // ...mapActions({
    //   caption: 'caption'
    // })
  }
}

</script>

<style lang="scss">
  @import './sass/app.scss';
</style>


