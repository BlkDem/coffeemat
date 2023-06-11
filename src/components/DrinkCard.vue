<template>
  <div class="card">
    <div class="card-content" style="background-position: center; background-size: 120%;" :style="{
          backgroundImage: `url(${require('@/assets/images/' + backgroundImage)})`
        }">
      <h2>{{ cardName }}</h2>
      <div class="price">{{ cardPrice }}</div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  props: {
    backgroundImage: {
      type: String,
      default: 'c1.jpg'
    },

    cardName: {
      type: String,
      default: ''
    },

    cardPrice: {
      type: String,
      default: ''
    },

  }
}

</script>
