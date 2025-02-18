<script>

  import useCounterStore from "@/stores/counter.js";
  import {mapActions, mapState} from "pinia";

  export default {
    computed: {
      ...mapState(useCounterStore,["count"]),
    },
    methods: {
      ...mapActions(useCounterStore, ["increment"]),
    }
  }

</script>

<template>
  <section>
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="space-y-4 md:space-y-8">
        <div class="max-w-xl">
          <h2 class="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>

          <p class="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
            architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas sequi.
          </p>
        </div>
        <div class="flex flex-col p-10 items-center gap-5">

          <h3 class="text-xl font-bold">Counter : <span class="text-teal-600" v-text="count"></span></h3>

          <button v-on:click="increment()"
              class="inline-block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden">
            Counter</button>

        </div>

        <img
            src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="rounded"
            alt=""
        />
      </div>
    </div>
  </section>

</template>

<style scoped>

</style>