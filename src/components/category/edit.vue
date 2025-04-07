<script>
import axios from "axios";
import swal from "sweetalert2";
export default {
  data(){
    return {
      category:{}
    }
  },
  mounted(){
    axios
        .get(`https://localhost/api/setup/category/${this.$route.params.id}`)
        .then((response) => { this.category = response.data; })
  },
  methods:{
    modify(){
      axios
          .put(
              `https://localhost/api/setup/category/${this.category.id}`,
              {name: this.category.name}
          ).then((response) => {
            swal.fire({
              icon: "success",
              title: `The category ${this.category.name} has been updated successfully.`,
              toast: true,
              position: "top-right",
              timer: 1500,
              timerProgressBar: true,
              showConfirmButton: false,
            })
          })
    },
    destroy(){
      axios
        .delete(`https://localhost/api/setup/category/${this.category.id}`)
        .then((response) => { this.$router.push({ path: '/category' }); })
    }
  }
}
</script>

<template>
  <div class="overflow-hidden rounded-lg border">
    <div class="space-y-3 divide-y divide-gray-200">
      <h3 class="px-3 py-2 text-md font-bold">Edit {{category.name}}</h3>
      <div class="flex flex-col gap-3 p-5">
        <label class="block font-semibold text-xs capitalize" for="name">Name</label>
        <input type="text" id="name" v-model="category.name" class="px-4 ml-5 py-2 rounded-md border">
      </div>
      <div class="flex justify-end gap-3 p-2">
        <router-link to="/category"  class="px-4 py-2 rounded-md bg-zinc-500 text-xs text-white font-semibold uppercase">Cancel</router-link>
        <button @click="modify()" class="px-4 py-2 rounded-md bg-teal-500 text-xs text-white font-semibold uppercase">update</button>
        <button @click="destroy()" class="px-4 py-2 rounded-md bg-rose-500 text-xs text-white font-semibold uppercase">delete</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>