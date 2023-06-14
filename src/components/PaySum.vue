<template>
  <div>
    <h2>{{ payName }}</h2>

    <div class="sum left-gradient">
      <h1>{{ paySum }} {{ payCurr }}</h1>
    </div>
  </div>

</template>

<script lang="ts">

export default (await import('vue')).defineComponent({
  props: {
    payName: {
      type: String,
      default: 'Sum to pay'
    },

    paySum: {
      type: String,
      default: ''
    },

    payCurr: {
      type: String,
      default: ''
    },

  }
})

</script>

<style lang="scss" scoped>
.pay-method {
  cursor: pointer;
  display: grid;
  height: 192px;
  border-radius: 0.75em;
  padding: 16px 16px;
  box-shadow: 0px 0px 16px var(--coffee-color);
  align-content: space-between;
}

h1 {
  font-size: 5rem;
  text-align: right;
  color: var(--nums-color);
}

.sum {
  height: 90px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

</style>
