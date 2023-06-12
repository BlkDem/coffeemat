<template>
  <div id="display">
    <div class="top">
      <div class="brand">
        <img class="logo" src="@/assets/images/coffee-logo.png"/>
      </div>
      <div class="brand-name">
        <TopMessage
          :message="topMessage"
        >
        </TopMessage>
      </div>
      <div class="back">
        <router-link :to="'/'" v-if="$route.name !== 'HomeScreen'">
          <!-- <div class="back" :class="{'opacity-0': $route.name === 'HomeScreen'}"> -->
            <font-awesome-icon :icon="['fa', 'fa-circle-arrow-left']" size="2xl" />
          <!-- </div> -->
      </router-link>
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
</template>

<script lang="ts">

import TopMessage from '@/components/TopMessage.vue';

export default {

  components: {
    TopMessage
  },

  data() {
    return {
      topMessage: 'Select a drink',
    }
  }
}
</script>


<style scoped lang="scss">

  @import '@/sass/const.scss';
  @import '@/sass/display.scss';
  .layout {
    margin: $margin-default;
    .main {
      // width: $vertical-width;
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

</style>
