<script>
  import axios from "axios";
  import swal from "sweetalert2";

  export default {
    data() {
      return {
        countries: {},
      }
    },
    methods: {
      firstPage(url){
        axios
            .get( url)
            .then(response => { this.countries = response.data; })
      },
      lastPage(url){
        axios
            .get( url)
            .then(response => { this.countries = response.data; })
      },
      selectPage(url){
        axios
            .get( url)
            .then(response => { this.countries = response.data; })
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
          if (result.isConfirmed) {
            axios
                .delete(`https://localhost/api/setup/citizen/country/${id}`)
                .then(response => {
                  axios.get(`https://localhost/api/setup/citizen/country?page=${this.countries.current_page}`)
                      .then(response => { this.countries = response.data; })
                })
          }
        })
      }
    },
    mounted() {
      axios
          .get( `https://localhost/api/setup/citizen/country`)
          .then(response => { this.countries = response.data; })
    }
  }
</script>

<template>
  <table class="w-full border">
    <thead>
    <tr class=" font-semibold divide-x">
      <td scope="col" class=" px-4 py-3">No.</td>
      <td scope="col" class=" px-4 py-3">Name</td>
      <td scope="col" class=" px-4 py-3">Official</td>
      <td scope="col" class=" px-4 py-3">CC2</td>
      <td scope="col" class=" px-4 py-3">CC3</td>
      <td scope="col" class=" px-4 py-3">
        <router-link class="px-3 py-0.5 bg-sky-100 rounded-md  uppercase text-sky-700" to="/citizen/country/create">create</router-link>
      </td>
    </tr>
    </thead>
    <tbody>
    <tr class="divide-x text-xs font-semibold border-t"
        v-for="(country, index) in countries.data" :key="country.id">
      <td class="px-4 py-2 ">{{ index + 1 }}</td>
      <td class="px-4 py-2 ">{{ country.name }}</td>
      <td class="px-4 py-2 ">{{ country.official }}</td>
      <td class="px-4 py-2 ">{{ country.cc2 }}</td>
      <td class="px-4 py-2 ">{{ country.cc3 }}</td>
      <td class="px-4 py-2 ">
        <div class="flex gap-2">
          <router-link class="px-3 py-0.5 bg-amber-100 rounded-md  uppercase text-amber-700" :to="`/citizen/country/${country.id}/edit`">edit</router-link>
          <button @click="destroyObject(country.id)" class="px-3 py-0.5 bg-rose-100 rounded-md  uppercase text-rose-700">delete</button>
        </div>
      </td>
    </tr>
    </tbody>
    <tfoot>
    <tr class="divide-x text-xs font-semibold border-t">
      <td class="px-4 py-2 ">
        <div class="flex space-x-3">
          <span>Current Page</span>
          <span class="text-white w-7 h-7 flex justify-center items-center rounded-full bg-rose-400">{{ countries.current_page }}</span>
        </div>
      </td>
      <td>
        <div class="flex space-x-3">
          <span>From</span>
          <span class="text-white w-7 h-7 flex justify-center items-center rounded-full bg-rose-400">{{ countries.from }}</span>
        </div>
      </td>

      <td>
        <div class="flex space-x-3">
          <span>To</span>
          <span class="text-white w-7 h-7 flex justify-center items-center rounded-full bg-rose-400">{{ countries.to }}</span>
        </div>
      </td>

      <td>
        <div class="flex space-x-3">
          <span>Per page</span>
          <span class="text-white w-7 h-7 flex justify-center items-center rounded-full bg-rose-400">{{ countries.per_page }}</span>
        </div>
      </td>

      <td>
        <div class="flex space-x-3">
          <span>Last Page</span>
          <span class="text-white w-7 h-7 flex justify-center items-center rounded-full bg-rose-400">{{ countries.last_page }}</span>
        </div>
      </td>

      <td>
        <div class="flex space-x-3">
          <span>Total</span>
          <span class="text-white w-7 h-7 flex justify-center items-center rounded-full bg-rose-400">{{ countries.total }}</span>
        </div>
      </td>
    </tr>
    <tr>
      <td colspan="6">
        <div class="flex divide-x text-xs font-semibold">
          <button
              @click="firstPage(countries.first_page_url)"
              class="bg-zinc-400 px-4 py-2 text-white text-xs uppercase focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">first page</button>
          <button
              v-for="(link, index) in countries.links"
              :key="link.label"
              :disabled="link.active || !link.url"
              @click="selectPage(link.url)"
              :class="{
                'bg-zinc-400': !link.active,
                'bg-zinc-500 ring-2 ring-offset-2 ring-sky-500': link.active,
              }"
              class="px-4 py-2 focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 text-white text-xs uppercase"><span v-html="link.label"></span></button>
          <button
              @click="lastPage(countries.last_page_url)"
              class="bg-zinc-400 px-4 py-2 text-white text-xs uppercase focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">last page</button>
        </div>
      </td>
    </tr>
    </tfoot>
  </table>
  <div class="bg-emerald-200"></div>
</template>

<style scoped>

</style>