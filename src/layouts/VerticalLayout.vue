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
      width: $vertical-width;
    }

    .info {
      width: 200px;
    }
  }

  .top {
    display: flex;
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

</style>
