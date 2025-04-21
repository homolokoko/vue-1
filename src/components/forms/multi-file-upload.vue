<script>
  import _ from 'lodash';
  import FileToBase64 from "@/assets/scripts.js";

  export default {
    name: 'MultiFileUpload',
    data() {
      return {
        images:[],
      }
    },
    methods: {
      uploaded(e){
        _.each(e.target.files, (file, key) => {
          FileToBase64.fileToBase(file)
              .then((result)=>{ this.images.push(result); });
        })
      },
      remove(index){
        _.pullAt(this.images, index);
      }
    }
  }
</script>

<template>
  <div class="w-full h-full flex justify-center items-center relative p-5 bg-slate-50 border-double border-2 rounded-lg">
    <label for="" class="px-5 py-2 rounded-lg bg-teal-600 text-white text-xs font-semibold">Browse</label>
    <input type="file" class="absolute w-full h-full opacity-0" @change="uploaded" multiple>
  </div>
  <div class="grid grid-cols-5 gap-3 mt-5">
    <div v-for="(image,i) in images" :key="i" class=" relative rounded-lg border">
      <img :src="image" alt="" class="w-full h-full">
      <span @click="remove(i)" class="cursor-default absolute -top-2 -right-2 z-10">
        <svg class="w-7 h-7  text-rose-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm5.757-1a1 1 0 1 0 0 2h8.486a1 1 0 1 0 0-2H7.757Z" clip-rule="evenodd"/>
        </svg>
      </span>
    </div>
  </div>
</template>

<style scoped>

</style>