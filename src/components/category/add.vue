<script>
import axios from "axios";
import swal from "sweetalert2";

export default {
  data(){
    return {
      name:'',
    }
  },
  methods: {
    submitFinish(){
      axios
          .post(`https://localhost/api/setup/category`,{name:this.name})
          .then((response) => {
            swal.fire({
              icon: "success",
              title: `The category ${response.data.name} was successfully created`,
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: false,
              toast: true,
              position: "top-right",
            }).then((result) => { this.$router.push({path: '/category'}) })
          })
    },
    submitContinue(){
      axios
          .post(`https://localhost/api/setup/category`,{name:this.name})
          .then((response) => {
            swal.fire({
              icon: "success",
              title: `The category ${response.data.name} was successfully created`,
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: false,
              toast: true,
              position: "top-right",
            }).then((result) => { this.name = "" })
          })
    }
  }
}

</script>

<template>
  <div class="overflow-hidden rounded-lg border">
    <div class="space-y-3 divide-y divide-gray-200">
      <h3 class="px-3 py-2 text-md font-bold">Add New</h3>
      <div class="flex flex-col gap-3 p-5">
          <label class="block font-semibold text-xs capitalize" for="name">Name</label>
          <input type="text" id="name" v-model="name" class="px-4 ml-5 py-2 rounded-md border">
      </div>
      <div class="flex justify-end gap-3 p-2">
        <router-link to="/category"  class="px-4 py-2 rounded-md bg-zinc-500 text-xs text-white font-semibold uppercase">Cancel</router-link>
        <button @click="submitFinish()" class="px-4 py-2 rounded-md bg-sky-500 text-xs text-white font-semibold uppercase">submit and finish</button>
        <button @click="submitContinue()" class="px-4 py-2 rounded-md bg-sky-500 text-xs text-white font-semibold uppercase">submit and continue</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>