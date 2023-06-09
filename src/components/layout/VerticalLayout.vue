<template>
  <div id="display">
    <div class="layout">
      <div class="main">
        <slot name="main"></slot>
      </div>

      <div class="info">
        <slot name="main">

        </slot>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">

  @import '@/sass/const.scss';
  @import '@/sass/display.scss';
  .layout {
    height: $vertical-height;
    margin: $margin-default;
    .main {
      width: $vertical-width;
    }

    .info {
      width: 200px;
    }
  }

</style>
