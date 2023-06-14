<template>
  <div class="component">
    <h3 class="left-gradient">{{ componentCaption }}</h3>
    <div class="select-row">
      <a @click="minusClick" class="pointer">
        <div class="shadow">
          <font-awesome-icon :icon="['fas', 'circle-minus']" size="2xl" />
        </div>
      </a>
      <div v-for="item in Max" :key="item" class="shadow">
        <font-awesome-icon
          :class="{'select-color light-shadow': value > (item-1)}"
          :icon="['fas', 'minus']" size="xl"/>
      </div>
      <a @click="plusClick" class="pointer shadow">
        <div class="shadow">
          <font-awesome-icon :icon="['fas', 'circle-plus']" size="2xl" />
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import store from '@/store';


export default (await import('vue')).defineComponent({

  emits: ['onChange'],

  props: {

    componentName: {
      type: String,
      default: 'name',
    },

    componentCaption: {
      type: String,
      default: 'Caption'
    },

    Min: {
      type: Number,
      default: 0
    },

    Max: {
      type: Number,
      default: 6
    },


  },

  methods: {
    minusClick() {
      if (this.value > 0) {
        this.value--;
        this.$emit('onChange', this.componentName, this.value);
      }
    },

    plusClick() {
      if (this.value < this.Max) {
        this.value++;
        this.$emit('onChange', this.componentName, this.value);
      }
    },

  },

  data() {
    return {
      value: 0,
    }
  },

  beforeMount() {
    const a = store.getters;
    if(a) this.value = a[this.componentName] ?? 0
  },

})

</script>

<style lang="scss" scoped>
.component {
  margin: 8px 16px;
  padding: 8px 8px;
  font-size: 2rem;
}
.select-row{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

h3 {
  text-align: center;
  height: 3.5rem;
  margin: 8px 8px;
  padding-top: 8px;
}

h3::before {
  content: '';
}

.select-color{
  color: var(--coffee-color);
}

</style>
