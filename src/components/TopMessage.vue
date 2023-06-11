<template>
  <h1>{{ message }}</h1>
</template>

<script lang="ts">


export default {
  props: {
    message: {
      type: String,
      default: 'Message'
    }
  }
}

</script>
