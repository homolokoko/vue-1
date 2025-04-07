<script>
import axios from "axios";

export default {
  data() {
    return {
      fill: {
        name: null,
        state_id: null,
        country_id:null,
      },
      states:[],
      country:null,
      countries:[]
    }
  },
  watch:{
    country(val){
      axios
          .get(`https://localhost/api/resource-mapping/citizen/${val}/state-list`)
          .then(response => { this.states = response.data; })
    },
  },
  mounted() {
    axios
        .get(`https://localhost/api/resource-mapping/citizen/country-list`)
        .then(response => { this.countries = response.data; })
  },
  methods: {
    submitContinue(){},
    submitFinish(){}
  }
}

</script>

<template>
  <div class="flex flex-col gap-3 p-5 border">
    <label for="">Name</label>
    <input type="text" v-model="fill.name" class="border px-4 py-3 rounded">
    <label for="">Country</label>
    <select v-model="country" class="border px-4 py-3 rounded">
      <option v-for="country in countries" :key="country.value"
              :value="country.value" selected>{{country.text}}</option>
    </select>
    <label for="">State</label>
    <select v-model="fill.state_id" class="border px-4 py-3 rounded">
      <option v-for="state in states" :key="state.value"
              :value="state.value" selected>{{state.text}}</option>
    </select>
    <div class="flex justify-end gap-3">
      <router-link to="/citizen/state" class="px-4 py-3 rounded-md bg-zinc-500 text-white uppercase tracking-wider font-semibold text-xs">back</router-link>
      <button @click="submitContinue()" class="px-4 py-3 rounded-md bg-sky-500 text-white uppercase tracking-wider font-semibold text-xs">submit and continue</button>
      <button @click="submitFinish()" class="px-4 py-3 rounded-md bg-sky-500 text-white uppercase tracking-wider font-semibold text-xs">submit and finish</button>
    </div>
  </div>
</template>

<style scoped>

</style>