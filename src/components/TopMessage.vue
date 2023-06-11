<template>
  <h1>{{ message }}</h1>
</template>

<script lang="ts">

import store from '@/store';

export default (await import('vue')).defineComponent({

  // props: {
  //   message: {
  //     type: String,
  //     default: 'Message'
  //   }
  // },

  data() {
    return {
      //message: ''
    }
  },

  computed: {
    message() {
      return store.state.page.caption
    }
  },

  mounted() {
    // this.message = store.state.page.caption;
    // console.log(store.state.page.caption)
  },
})

</script>
