<script>
import axios from "axios";
import swal from "sweetalert2";

export default {
  data(){
    return {
      param:'',
      fill:{
        cc2:'',
        cc3:'',
        name:'',
        official:'',
      }
    }
  },
  mounted(){
    this.param=this.$route.params.id
    axios
        .get(`https://localhost/api/setup/citizen/country/${this.param}`)
        .then((response) => { this.fill=response.data; })
  },
  methods:{
    modify(){
      axios
          .put(`https://localhost/api/setup/citizen/country/${this.param}`,this.fill)
          .then((response) => {
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
        .delete(`https://localhost/api/setup/citizen/country/${this.param}`)
        .then((response) => {
          swal.fire({
            icon: "success",
            toast: true,
            title: "Deleted Success",
            timer: 1500,
            timerProgressBar: true,
            position: "top-right",
            showConfirmButton: false,
          }).then((response) => {
            this.$router.push({path: '/citizen/country'});
          })
        })
    }
  }
}

</script>

<template>
  <div class="flex flex-col gap-3 border-2 p-5">
    <label for="">Name</label>
    <input type="text" v-model="fill.name" class="border px-4 py-3 rounded">
    <label for="">Official</label>
    <input type="text" v-model="fill.official" class="border px-4 py-3 rounded">
    <label for="">CC2</label>
    <input type="text" v-model="fill.cc2" class="border px-4 py-3 rounded">
    <label for="">CC3</label>
    <input type="text" v-model="fill.cc3" class="border px-4 py-3 rounded">
    <div class="flex justify-end gap-3">
      <router-link to="/citizen/country" class="px-4 py-3 rounded-md bg-zinc-500 text-white uppercase tracking-wider font-semibold text-xs">back</router-link>
      <button @click="modify()" class="px-4 py-3 rounded-md bg-teal-500 text-white uppercase tracking-wider font-semibold text-xs">update</button>
      <button @click="destroy()" class="px-4 py-3 rounded-md bg-rose-500 text-white uppercase tracking-wider font-semibold text-xs">delete</button>
    </div>
  </div>

</template>

<style scoped>

</style>