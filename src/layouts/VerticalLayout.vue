<template>
  <div id="display">
    <div class="top">
      <div class="brand">
        <router-link to="/">
          <img class="logo" src="@/assets/images/coffee-logo.png"/>
        </router-link>
      </div>
      <div class="brand-name">
        <TopMessage />
      </div>
      <div class="back">
        <a @click="$router.go(-1)" v-if="$route?.name !== 'HomeScreen'">
          <font-awesome-icon :icon="['fa', 'fa-circle-arrow-left']" size="2xl" />
        </a>
      </div>
    </div>
    <div class="layout">
      <div class="main">
        <slot name="main"></slot>
      </div>

      <div class="info">
        <slot name="info">

        </slot>
      </div>
    </div>
  </div>
  <div class="emulator-panel">
    <EmulatorState/>
  </div>
</template>

<script lang="ts">

import TopMessage from '@/components/TopMessage.vue';
import EmulatorState from '@/components/emulator/EmulatorState.vue';

export default (await import('vue')).defineComponent({

  components: {
    TopMessage,
    EmulatorState
  },

})
</script>


<style scoped lang="scss">

  @import '@/sass/const.scss';
  @import '@/sass/display.scss';
  .layout {
    margin: $margin-default;
    .main {
      width: inherit;
    }

    .info {
      width: 200px;
    }
  }

  .top {
    display: flex;
    justify-content: space-between;
    .brand {
      display: flex;
      justify-content: center;
      background-color: wheat;
      height: $topbar-height;
      width: 100px;
      margin-left: 32px;
    }

    .logo {
      width: 80px;
      height: 80px;
      margin-top: 8px;
    }

    .brand-name {
      font-size: 2rem;
    }
  }

  .back {
    display: flex;
    width: 80px;
    font-size: 3em;
    margin: 16px 32px;
    cursor: default;
  }

  .opacity-0 {
    opacity: 0;

  }

  .emulator-panel {
    position: absolute;
    right: 0;
    top: 0;
    margin: 16px 16px;
    width: 400px;
  }
</style>
