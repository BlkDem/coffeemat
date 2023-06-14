<template>
  <h1>{{ message }}</h1>
</template>

<script lang="ts">

import store from '@/store';

export default (await import('vue')).defineComponent({

  computed: {
    message() {
      return store.state.page.caption
    }
  }

})

</script>

<style lang="scss" scoped>
h1 {
  color: var(--nums-color);
}
</style>
