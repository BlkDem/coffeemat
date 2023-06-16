<template>
  <div class="info-page">
    <div class="info-page-detail">
      <!-- <h1 class="font-3rem">Preparing drink</h1> -->
      <div class="shadow font-10rem">
        <font-awesome-icon :icon="['fa', 'mug-hot']" />
      </div>

      <div>
        <h1 class="font-3rem">Have a nice day!</h1>
      </div>

      <div>
        <h2>Home after <span :class="{'opacity-09': countDown}">{{ countDown }}</span></h2>
      </div>

    </div>

  </div>
</template>

<script lang="ts">

import router from '@/router';
import store from '@/store';

export default (await import('vue')).defineComponent({

  name: 'prepare-page',

  data() {
    return {
      information: 'Drink ready!',
      countDown: 10,
    }
  },

  created() {
    store.commit('caption', this.information);
  },

  mounted() {
      this.homeCountDown();
  },

  computed: {
    infoText() {
      return store.state.infoText;
    },

    progress(){
      return store.state.machine.progress;
    }

  },

  methods: {
    async homeCountDown() {
      const c = this.countDown;
      for (let i=c; i>0; i--) {
        await new Promise((resolve) => {
          setTimeout(()=>{
            this.countDown--;
            resolve(true);
          }, 1000);
        })
      }
      router.push('/');
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

.opacity-09 {
  opacity: 0.9;
}
.opacity-0 {
  opacity: 0;
}

</style>
