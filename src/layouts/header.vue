<script>
  import useCounterStore from "@/stores/counter.js";
  import {mapState} from "pinia";
  export default {
    computed: {
      ...mapState(useCounterStore,["count"]),
    },
  }
</script>

<template>
  <header class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">

        <div class="md:flex md:items-center md:gap-12">
          <router-link to="/">
            <div class="relative">
              <span class="absolute -top-3 -right-3 w-6 h-6 text-xs text-white bg-red-500 rounded-full flex justify-center items-center font-semibold" v-text="count"></span>
              <svg class="h-8 w-8 text-teal-700"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </div></router-link>
        </div>

        <div class="hidden md:block">
          <nav aria-label="Global">
            <ul class="flex items-center gap-6 text-sm">

              <li>
                <router-link
                    to="/home"
                    activeClass="text-teal-500 font-bold">
                  <button class=" transition hover:text-teal-700"> Home </button>
                </router-link>
              </li>

              <li>
                <router-link
                    to="/about"
                    activeClass="text-teal-500 font-bold">
                  <button class=" transition hover:text-teal-700"> About </button>
                </router-link>
              </li>


            </ul>
          </nav>
        </div>

        <div class="flex items-center gap-4">
          <div class="sm:flex sm:gap-4">
            <a
                class="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                href="#"
            >
              Login
            </a>

            <div class="hidden sm:flex">
              <a
                  class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                  href="#"
              >
                Register
              </a>
            </div>
          </div>

          <div class="block md:hidden">
            <button
                class="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>