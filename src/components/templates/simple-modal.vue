<script>
  export default {
    data(){
      return {
        isOpen: false
      }
    },
    methods: {
      openModal(){ this.isOpen = true },
      closeModal(){ this.isOpen = false }
    }
  }
</script>

<template>
  <div class="relative">
    <span @click="openModal()"><slot name="trigger"></slot></span>
    <div v-if="isOpen" class="fixed top-0 left-0 z-[99] flex items-center justify-center w-screen h-screen">
      <div v-if="isOpen" @click="closeModal()" class="absolute ease-in-out duration-300 transition inset-0 w-full h-full bg-black bg-opacity-40"></div>
      <div v-if="isOpen" class="relative w-full py-6 bg-white px-7 sm:max-w-lg sm:rounded-lg">
        <div class="flex items-center justify-between pb-2">
          <h3 class="text-lg font-semibold"><slot name="title"></slot></h3>
          <button @click="closeModal()" class="absolute top-0 right-0 flex items-center justify-center w-8 h-8 mt-5 mr-5 text-gray-600 rounded-full hover:text-gray-800 hover:bg-gray-50">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
          <div class="relative w-auto">
            <slot></slot>
          </div>

        </div>
    </div>
  </div>
</template>

<style scoped>

</style>