<template>
  <div class="info-page">
    <div class="info-page-detail">
      <div>
        <h1>{{ infoText }}</h1>
      </div>
      <div class="buttons">
        <a @click="$router.go(-1)" class="pointer">
          <font-awesome-icon :icon="['fa', 'fa-circle-arrow-left']" size="2xl" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import store from '@/store';
import router from '@/router';

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

  computed: {
    infoText() {
      return store.state.infoText;
    }
  },

})

</script>

<style lang="scss" scoped>
@import '@/sass/const.scss';

a {
  color: var(--coffee-color);
  font-size: 3rem;
}

.buttons {
  margin: 16px 16px;
}
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
  flex-direction: column;
}

h1 {
  font-size: 3rem;
  text-shadow: none;
}

</style>
