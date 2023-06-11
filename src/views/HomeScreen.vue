<template>
  <div>
    <div id="cards">
        <DrinkCard  v-for="(card, key) in drinkCards" :key="key"
          :background-image="card.image"
          :card-name="card.name"
        >
        </DrinkCard>
    </div>
  </div>
</template>

<script lang="ts">

import DrinkCard from '@/components/DrinkCard.vue';
import { DrinkCardType, DrinkCardTypeResponse } from '../types';
import axios from 'axios';


export default (await import('vue')).defineComponent({

  name: "card-list",

  components: {
    DrinkCard
  },

  data() {
    return {
      drinkCards: [] as DrinkCardType[],
      abc: ''
    }
  },

  // beforeMount() {

  // },

  mounted() {
    console.log('Display mounted')
    this.loadCards();
  },

  methods: {
    async loadCards() {
      await axios.get<any>('/repository/file/data.json',
        {
          headers: {
            Accept: 'application/json',
          },
        },
      )
      .then(response => {
        const {data} = response.data as DrinkCardTypeResponse;
        console.log(data)
        this.drinkCards = data
      });
    }
  }
})
</script>


