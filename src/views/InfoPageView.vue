<template>
  <div class="info-page">
    <div class="info-page-detail">
      <slot>
        123
      </slot>

    </div>
  </div>
</template>

<script lang="ts">

import store from '@/store';

export default (await import('vue')).defineComponent({

  name: 'info-page',


  data() {
    return {
      information: 'Information'
    }
  },

  created() {
    store.commit('caption', this.information);
  },

})

</script>

<style lang="scss" scoped>
@import '@/sass/const.scss';
.info-page {
  height: calc($vertical-height - $topbar-height - 80px);
}

.info-page-detail{
  height: calc($vertical-height - $topbar-height - 80px);
  color: var(--coffee-color);
  background-color: var(--main-color);
  opacity: .8;
  border: 8px solid var(--coffee-color);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font: inherit;
}

</style>
