<script>

import _ from "lodash";
import moment from "moment";

export default {
  data() {
    return {
      date:'',
      time:'',
    }
  },

  mounted() {
    this.date = moment().format("YYYY-MM-DD");
    setInterval(() => {
      this.time = moment().format("h:mm:ss a")
    }, 1000)
  }
}

</script>

<template>
  <div class="py-5 px-7 flex justify-between items-center shadow-lg border-b">
    <div class="flex justify-between w-1/4 items-center">
      <div class="logo">
        <span class="text-4xl font-bold font-sans text-slate-800">ecc</span>
        <span class="text-3xl font-bold font-sans text-teal-500">omi</span>
      </div>
      <div class="user flex gap-7">
        <div class="relative">
          <div class="avatar absolute -inset-x-5 -inset-y-1.5 h-9 w-9 flex justify-center items-center bg-teal-500 rounded-full">
            <svg class="w-7 h-7 border border-white rounded-full text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.737 8.737a21.49 21.49 0 0 1 3.308-2.724m0 0c3.063-2.026 5.99-2.641 7.331-1.3 1.827 1.828.026 6.591-4.023 10.64-4.049 4.049-8.812 5.85-10.64 4.023-1.33-1.33-.736-4.218 1.249-7.253m6.083-6.11c-3.063-2.026-5.99-2.641-7.331-1.3-1.827 1.828-.026 6.591 4.023 10.64m3.308-9.34a21.497 21.497 0 0 1 3.308 2.724m2.775 3.386c1.985 3.035 2.579 5.923 1.248 7.253-1.336 1.337-4.245.732-7.295-1.275M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
            </svg>
          </div>
          <div class="content overflow-hidden rounded-r-full">
            <select class="w-full px-5 py-0.5">
              <option value="">Jailo</option></select>
          </div>
        </div>
        <div class="relative">
          <span class="absolute -top-1 -right-1 w-4 h-4 bg-teal-600 rounded-full"></span>
          <svg class="w-7 h-7 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"/>
          </svg>
        </div>
      </div>
    </div>
    <div>
      <div class="flex divide-x-2 gap-7">
      <button>
        <svg class="w-10 h-10 text-slate-800 dark:text-slate-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"/>
        </svg>
      </button>
        <div class="px-5 space-y-3">
          <span class="block text-end font-semibold text-xs tracking-wider">{{ date }}</span>
          <span class="block text-end font-semibold text-xs tracking-wider">{{ time }}</span>
        </div>
      </div>
    </div>
  </div>

</template>