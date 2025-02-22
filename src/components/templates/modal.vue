<script>
import {mapActions, mapState} from "pinia";
  import useModalStore from "@/stores/store/modal.js";
  export default {
    computed:{
      ...mapState(useModalStore,["isOpen"])
    },
    methods: {
      ...mapActions(useModalStore,["openModal","closeModal"]),
    }
  }
</script>

<template>
  <div class="relative" @keyup.esc="closeModal">
    <span @click="openModal()"><slot name="trigger"></slot></span>
    <div v-show="isOpen" class=" fixed z-10 top-0 left-0 w-screen h-screen" >
      <div class="w-full h-full flex justify-center items-center bg-slate-500 bg-opacity-50 backdrop-blur-sm">
        <div class="rounded-lg bg-white shadow-lg overflow-hidden min-w-80 space-y-4">
          <div class="border-b flex px-5 py-4 justify-between">
            <h3 class="font-bold text-lg capitalize text-neutral-600 tracking-wide"><slot name="title"></slot></h3>
            <button @click="closeModal()">
              <svg class="w-6 h-6 rounded-full text-gray-800 dark:text-neutral-600 hover:bg-teal-300 hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
            </button>
          </div>
          <div class="border-b flex justify-center items-center px-5 py-4"><slot name="content"></slot></div>
          <div class="flex w-full justify-end gap-5 px-5 py-4"><slot name="btngroup"></slot></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>