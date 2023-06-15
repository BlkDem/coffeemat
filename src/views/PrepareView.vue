<template>
  <div class="info-page">
    <div class="info-page-detail">
      <!-- <h1 class="font-3rem">Preparing drink</h1> -->
      <div class="shadow font-10rem">
        <font-awesome-icon :icon="['far', 'hourglass-half']" spin />
      </div>

      <div class="progress-items">
        <div v-for="item in 10" :key="item">
          <div class="progress-item" :class="{'opacity-09': (progress+1)>=item}"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">

import store from '@/store';

export default (await import('vue')).defineComponent({

  name: 'prepare-page',

  data() {
    return {
      information: 'Preparing drink'
    }
  },

  created() {
    store.commit('caption', this.information);
  },

  computed: {
    infoText() {
      return store.state.infoText;
    },

    progress(){
      return store.state.machine.progress;
    }

  }

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
  flex-direction: column;
}

h1 {
  text-shadow: none;
  margin: 16px 16px;
}
.font-3rem {
  font-size: 3rem;
}
.font-10rem {
  font-size: 10rem;
}

.progress-items{
  width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 64px;
}

.progress-item{
  background-color: var(--coffee-color);
  width: 64px;
  height: 80px;
  opacity: 0;
  transition: all .5s;
  border-radius: 16px;
}

.opacity-09 {
  opacity: 0.9;
}
.opacity-0 {
  opacity: 0;
}

</style>
