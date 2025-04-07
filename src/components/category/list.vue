<script>
import axios from "axios";
import swal from "sweetalert2";

export default {
  data(){
    return {
      list:{}
    }
  },
  mounted(){
    axios
        .get(`https://localhost/api/setup/category`)
        .then((response) => { this.list = response.data; })
  },
  methods: {
    destroy(id){
      swal.fire({
        icon: "warning",
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`https://localhost/api/setup/category/${id}`)
          .then((response) => {
            swal.fire({
              icon: "error",
              title: `The category ${response.data.name} has been deleted`,
              toast:true,
              timer: 1500,
              timerProgressBar: true,
              showConfirmButton: false,
              position: "top-right",
            }).then(()=>{
              axios
                  .get(`https://localhost/api/setup/category?page=${this.list.current_page}`)
                  .then((response) => { this.list = response.data; })
            })
          })
        }
      })
    },
    firstPage(url){
      axios
          .get(url)
          .then((response) => { this.list = response.data; })
    },
    lastPage(url){
      axios
          .get(url)
          .then((response) => { this.list = response.data; })
    },
    selectPage(url){
      axios
          .get(url)
          .then((response) => { this.list = response.data; })
    },
  }
}

</script>

<template>
  <table>
    <thead>
    <tr>
      <td class="px-4 py-3 border font-semibold capitalize text-xs">Name</td>
      <td class="px-4 py-3 border font-semibold capitalize text-xs">
        <router-link to="/category/add" class="px-4 py-0.5 bg-sky-500 text-white uppercase font-semibold text-xs rounded-md">add</router-link>
      </td>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item, index) in list.data" :key="item.id">
      <td class="px-4 py-0.5 border capitalize text-xs">{{ item.name }}</td>
      <td class="px-4 py-0.5 border capitalize text-xs">
        <div class="gap-2 flex">
          <router-link :to="`/category/${item.id}/edit`" class="px-4 py-0.5 bg-amber-500 text-white text-xs font-semibold uppercase rounded-md">Edit</router-link>
          <button @click="destroy(item.id)" class="px-4 py-0.5 bg-rose-500 text-white text-xs font-semibold uppercase rounded-md">Delete</button>
        </div>
      </td>
    </tr>
    </tbody>
    <tfoot>
    <tr class="divide-x text-xs font-semibold border-t">
      <td class="px-4 py-2 ">
        <div class="flex space-x-3">
          <span>Current Page</span>
          <span class="text-white w-7 h-7 flex justify-center items-center rounded-full bg-rose-400">{{ list.current_page }}</span>
        </div>
      </td>
      <td>
        <div class="flex space-x-3">
          <span>From</span>
          <span class="text-white w-7 h-7 flex justify-center items-center rounded-full bg-rose-400">{{ list.from }}</span>
        </div>
      </td>

      <td>
        <div class="flex space-x-3">
          <span>To</span>
          <span class="text-white w-7 h-7 flex justify-center items-center rounded-full bg-rose-400">{{ list.to }}</span>
        </div>
      </td>

      <td>
        <div class="flex space-x-3">
          <span>Per page</span>
          <span class="text-white w-7 h-7 flex justify-center items-center rounded-full bg-rose-400">{{ list.per_page }}</span>
        </div>
      </td>

      <td>
        <div class="flex space-x-3">
          <span>Last Page</span>
          <span class="text-white w-7 h-7 flex justify-center items-center rounded-full bg-rose-400">{{ list.last_page }}</span>
        </div>
      </td>

      <td>
        <div class="flex space-x-3">
          <span>Total</span>
          <span class="text-white w-7 h-7 flex justify-center items-center rounded-full bg-rose-400">{{ list.total }}</span>
        </div>
      </td>
    </tr>
    <tr>
      <td colspan="6">
        <div class="flex divide-x text-xs font-semibold">
          <button
              @click="firstPage(list.first_page_url)"
              class="bg-zinc-400 px-4 py-2 text-white text-xs uppercase focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">first page</button>
          <button
              v-for="(link, index) in list.links"
              :key="link.label"
              :disabled="link.active || !link.url"
              @click="selectPage(link.url)"
              :class="{
                'bg-zinc-400': !link.active,
                'bg-zinc-500 ring-2 ring-offset-2 ring-sky-500': link.active,
              }"
              class="px-4 py-2 focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 text-white text-xs uppercase"><span v-html="link.label"></span></button>
          <button
              @click="lastPage(list.last_page_url)"
              class="bg-zinc-400 px-4 py-2 text-white text-xs uppercase focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">last page</button>
        </div>
      </td>
    </tr>
    </tfoot>
  </table>
</template>

<style scoped>

</style>