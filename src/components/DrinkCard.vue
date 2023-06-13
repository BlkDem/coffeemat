<template>
  <router-link
    :to=" '/detail/id=' + cardDrink?.id"
  >
  <div class="card">
    <div class="card-content" style="background-position: center; background-size: 120%;" :style="{
          backgroundImage: `url(${require('@/assets/images/' + cardDrink?.image)})`
        }">
      <h2>{{ cardDrink?.name }}</h2>
      <div class="price">{{ cardDrink?.price }} {{ cardDrink?.currency }}</div>
    </div>
  </div>
  </router-link>
</template>

<script lang="ts">

export default {
  props: {
    cardDrink: {
      type: Object,
    },
  }
}

</script>
