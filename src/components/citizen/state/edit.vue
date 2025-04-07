<script>
import axios from "axios";
import swal from "sweetalert2";

export default {
  data(){
    return {
      fill:{
        name:'',
        country_id:'',
      },
      param:'',
      countries:[],
    }
  },
  mounted(){
    this.param = this.$route.params.id;
    axios
        .get(`https://localhost/api/resource-mapping/citizen/country-list`)
        .then((response) => { this.countries = response.data; })
    axios
        .get(`https://localhost/api/setup/citizen/state/${this.param}`)
        .then((response)=>{ this.fill = response.data; })
  },
  methods:{
    modify(){
      axios
      .put(`https://localhost/api/setup/citizen/state/${this.param}`,this.fill)
      .then((response)=>{
        swal.fire({
          icon: "success",
          toast: true,
          title: "Updated Success",
          timer: 1500,
          timerProgressBar: true,
          position: "top-right",
          showConfirmButton: false,
        })
      })
    },
    destroy(){
      axios
      .delete(`https://localhost/api/setup/citizen/state/${this.param}`)
      .then((response)=>{
        swal.fire({
          icon: "success",
          toast: true,
          title: "Deleted Success",
          timer: 1500,
          timerProgressBar: true,
          position: "top-right",
          showConfirmButton: false,
        }).then((response)=>{
          this.$router.push({path: '/citizen/state'});
        })
      })
    },
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
      <button @click="modify()" class="px-4 py-3 rounded-md bg-teal-500 text-white uppercase tracking-wider font-semibold text-xs">update</button>
      <button @click="destroy()" class="px-4 py-3 rounded-md bg-rose-500 text-white uppercase tracking-wider font-semibold text-xs">delete</button>
    </div>
  </div>
</template>

<style scoped>

</style>