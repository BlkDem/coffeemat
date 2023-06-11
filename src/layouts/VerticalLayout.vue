<template>
  <div id="display">
    <div class="top">
      <div class="brand">

      </div>
      <div class="brand-name">
        <h1>Выберите напиток</h1>
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
      background-color: wheat;
      height: $topbar-height;
      width: 100px;
      margin-left: 32px;
    }

    .brand-name {
      font-size: 2rem;
    }
  }

</style>
