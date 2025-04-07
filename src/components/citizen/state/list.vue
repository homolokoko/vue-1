<script>
import axios from "axios";
import swal from "sweetalert2";

export default {
  data(){
    return {
      states:{}
    }
  },
  mounted(){
    axios
        .get(`https://localhost/api/setup/citizen/state`)
        .then(response => { this.states = response.data; })
  },
  methods: {
    firstPage(url){
      axios
          .get(url)
          .then(response => { this.states = response.data; })
    },
    lastPage(url){
      axios
          .get(url)
          .then(response => { this.states = response.data; })
    },
    selectPage(url){
      axios
          .get(url)
          .then(response => { this.states = response.data; })
    },
    destroyObject(id){
      swal.fire({
        icon: "warning",
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: "#e74c3c",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, leave it!",
      }).then((result) => {
        if(result.isConfirmed){
          axios
              .delete(`https://localhost/api/setup/citizen/state/${id}`)
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
                  axios
                      .get(`https://localhost/api/setup/citizen/state?page=${this.states.current_page}`)
                      .then(response => { this.states = response.data; })
                })
              })
        }
      })
    }
  }
}

</script>

<template>
  <table class="w-full border">
    <thead>
    <tr class="border-b divide-x">
      <td class="text-sm font-semibold uppercase tracking-winder px-4 py-3">Name</td>
      <td class="text-sm font-semibold uppercase tracking-winder px-4 py-3">Under</td>
      <td class="text-sm font-semibold uppercase tracking-winder px-4 py-3">
        <router-link class="px-3 py-0.5 bg-sky-100 rounded-md  uppercase text-sky-700" to="/citizen/state/create">create</router-link>
      </td>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(state, index) in states.data" :key="state.id"
        class="border-b divide-x">
      <td class="text-xs font-semibold px-4 py-2"><span v-text="state.name"></span></td>
      <td class="text-xs font-semibold px-4 py-2"><span v-text="state.country.name"></span></td>
      <td class="text-xs font-semibold px-4 py-2">
        <div class="flex gap-2">
          <router-link class="px-3 py-0.5 bg-amber-100 rounded-md  uppercase text-amber-700" :to="`/citizen/state/${state.id}/edit`">edit</router-link>
          <button @click="destroyObject(state.id)" class="px-3 py-0.5 bg-rose-100 rounded-md  uppercase text-rose-700">delete</button>
        </div>
      </td>
    </tr>
    </tbody>
    <tfoot>
    <tr class="divide-x text-xs font-semibold border-t">
      <td class="px-4 py-2 ">
        <div class="flex space-x-3">
          <span>Current Page</span>
          <span class="text-white w-7 h-7 flex justify-center items-center rounded-full bg-rose-400">{{ states.current_page }}</span>
        </div>
      </td>
      <td>
        <div class="flex space-x-3">
          <span>From</span>
          <span class="text-white w-7 h-7 flex justify-center items-center rounded-full bg-rose-400">{{ states.from }}</span>
        </div>
      </td>

      <td>
        <div class="flex space-x-3">
          <span>To</span>
          <span class="text-white w-7 h-7 flex justify-center items-center rounded-full bg-rose-400">{{ states.to }}</span>
        </div>
      </td>

      <td>
        <div class="flex space-x-3">
          <span>Per page</span>
          <span class="text-white w-7 h-7 flex justify-center items-center rounded-full bg-rose-400">{{ states.per_page }}</span>
        </div>
      </td>

      <td>
        <div class="flex space-x-3">
          <span>Last Page</span>
          <span class="text-white w-7 h-7 flex justify-center items-center rounded-full bg-rose-400">{{ states.last_page }}</span>
        </div>
      </td>

      <td>
        <div class="flex space-x-3">
          <span>Total</span>
          <span class="text-white w-7 h-7 flex justify-center items-center rounded-full bg-rose-400">{{ states.total }}</span>
        </div>
      </td>
    </tr>
    <tr>
      <td colspan="6">
        <div class="flex divide-x text-xs font-semibold">
          <button
              @click="firstPage(states.first_page_url)"
              class="bg-zinc-400 px-4 py-2 text-white text-xs uppercase focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">first page</button>
          <button
              v-for="(link, index) in states.links"
              :key="link.label"
              :disabled="link.active || !link.url"
              @click="selectPage(link.url)"
              :class="{
                'bg-zinc-400': !link.active,
                'bg-zinc-500 ring-2 ring-offset-2 ring-sky-500': link.active,
              }"
              class="px-4 py-2 focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 text-white text-xs uppercase"><span v-html="link.label"></span></button>
          <button
              @click="lastPage(states.last_page_url)"
              class="bg-zinc-400 px-4 py-2 text-white text-xs uppercase focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">last page</button>
        </div>
      </td>
    </tr>
    </tfoot>
  </table>
</template>

<style scoped>

</style>