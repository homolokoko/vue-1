<script>
import QrScanner from 'qr-scanner';
export default {
  data(){
    return {
      result: '',
      scanner:null,
      isActive:true,
    }
  },
  mounted() {
    this.initQrScanner();
    this.startScanner();
  },
  methods: {
    initQrScanner() {
        this.scanner = new QrScanner(
          this.$refs.scanner,
          (result) => {
            this.result = result;
            this.stopScanner();
          },
        );
    },
    startScanner() {
      this.isActive = true;
      this.scanner.start();
    },
    stopScanner() {
      this.isActive = false;
      this.scanner.stop();
    },
  }
}

</script>

<template>
  <div class="flex justify-center flex-col items-center w-full">
    <div v-show="isActive" class="relative">
      <video ref="scanner"></video>
      <button @click="stopScanner()" class="absolute top-3 right-3">
        <svg class="w-6 h-6 border-2 border-double rounded-md hover:bg-slate-500 hover:text-white duration-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
        </svg>
      </button>
    </div>
    <h3 v-if="!isActive">
      <span class="font-bold uppercase text-xl text-black" v-if="result">Result - </span>
      <span class="font-bold uppercase text-xl text-green-700" v-text="result"></span>
    </h3>
    <button v-if="!isActive" @click="startScanner()" class="p-2 rounded-lg border-2 border-double">
      <img src="/icons/refresh.png" alt="" class="w-20 h-20">
    </button>
  </div>
</template>

<style scoped>

</style>