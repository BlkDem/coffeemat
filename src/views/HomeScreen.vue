<template>
  <div>
    <div id="cards">
        <DrinkCard  v-for="(card, key) in drinkCards" :key="key"
          :card-drink="card"
        >
        </DrinkCard>
    </div>
  </div>
</template>

<script lang="ts">

import axios from 'axios';
import store from '@/store';
import DrinkCard from '@/components/DrinkCard.vue';
import { DrinkCardType, DrinkCardTypeResponse } from '../types';
import { getData } from '@/services/DataRepositoryService';
// import { loadData } from '@/repository/file/FileRepository';


export default (await import('vue')).defineComponent({

  name: "card-list",

  components: {
    DrinkCard
  },

  data() {
    return {
      drinkCards: [] as DrinkCardType[],
    }
  },

  async mounted() {
    store.commit('caption', 'Select a drink')
    // this.drinkCards = await loadData();
    this.drinkCards = await getData() as DrinkCardType[];
    // this.loadData();
    // console.log();
  },

  methods: {

    async loadData() {
      await axios.get<DrinkCardTypeResponse>('/repository/file/data.json',
        {
          headers: {
            Accept: 'application/json',
          },
        },
      )
      .then(response => {
        const { data } = response.data as DrinkCardTypeResponse;
        this.drinkCards = data
        return data;
      });
    }
  }
})
</script>


