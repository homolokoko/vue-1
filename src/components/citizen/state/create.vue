<script>
  import _ from "lodash";
  import axios from "axios";
  import swal from "sweetalert2";

  export default {
    data(){
      return {
        fill:{
          name:'',
          country_id:'',
        },
        countries:[],
      }
    },
    mounted(){
      axios
          .get(`https://localhost/api/resource-mapping/citizen/country-list`)
          .then((response) => { this.countries = response.data; })
    },
    methods:{
      submitContinue(){
        axios
          .post(`https://localhost/api/setup/citizen/state`,this.fill)
          .then((response) => {
            swal.fire({
              icon: "success",
              title: "Success",
              timer: 1000,
              showConfirmButton: false,
              toast: true,
              timerProgressBar: true,
              position: "top-right",
            }).then((result) => {
              this.fill = {
                name:'',
                country_id:response.data.country_id,
              };
            })
          })
      },
      submitFinish(){
        axios
          .post(`https://localhost/api/setup/citizen/state`,this.fill)
          .then((response) => { this.$router.push({path:'/citizen/state'}); })
      }
    }
  }
</script>

<template>
  <div class="flex flex-col gap-3 p-5 border">
    <label for="">Name</label>
    <input type="text" v-model="fill.name" class="border px-4 py-3 rounded">
    <label for="">Country</label>
    <select v-model="fill.country_id" class="border px-4 py-3 rounded">
      <option value="" selected>Please Choose</option>
      <option v-for="country in countries" :key="country.value"
      :value="country.value" selected>{{country.text}}</option>
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