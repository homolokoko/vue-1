<script>
import _ from "lodash";
import axios from "axios";
import {nextTick} from "vue";
export default {
  data(){
    return {
      user_id:'1246',
      photographs:{}
    }
  },
  mounted(){
    axios
        .get(`https://localhost/api/inspection/photograph?user_id=${this.user_id}`)
        .then((response) => { this.photographs = response.data; })
  },
  methods: {
    async handleFilesChange(e){
      let result = _.chunk(e.target.files,20);
      _.each(result,async (phase, index)=>{
        await this.fileUploadToSever(phase);
      })

    },
    fileToBase64(file){
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve(reader.result); // Resolve the promise with the Base64 string
        };
        reader.onerror = () => {
          reject(new Error('Error reading file')); // Reject the promise on error
        };
        reader.readAsDataURL(file); // Start reading the file
      });
    },
    async fileUploadToSever(files){
      try{
        let items =  await Promise.all(_.map(files, (file)=>{
          const result = this.fileToBase64(file);
          return { img: result };
        }))
        await axios.post(`https://localhost/api/ispection/photograph`, {items:items})
      }catch(err){
        console.log(err)
      }
    },
    firstPage(url){
      axios
          .get(`${url}&user_id=${this.user_id}`)
          .then((response) => { this.photographs = response.data; })
    },
    lastPage(url){
      axios
          .get(`${url}&user_id=${this.user_id}`)
          .then((response) => { this.photographs = response.data; })
    },
    routePage(url){
      axios
          .get(`${url}&user_id=${this.user_id}`)
          .then((response) => { this.photographs = response.data; })
    },
  }
}

</script>

<template>
  <div class="relative flex items-center justify-center border-2 border-dashed rounded-lg">
    <div class="flex flex-col items-center justify-center p-10 space-y-3">
      <label for="files" class="px-4 py-2 text-xs font-semibold tracking-wider text-white uppercase bg-red-400 rounded-md">Browse</label>
      <h3 class="font-bold tracking-wider text-gray-700 uppercase text-md"> Drop files here </h3>
    </div>
    <input @change="handleFilesChange" id="files" type="file" class="absolute top-0 left-0 w-full h-full p-10 bg-red-100 opacity-0" multiple />
  </div>
  <div class="grid grid-cols-4 overflow-auto gap-0">
    <div v-for="(photo, index) in photographs.data" :key="index">
      <img
          draggable="true"
          @dragstart="$event.dataTransfer.setData('text/plain', photo.file_path)"
          :src="`https://localhost${photo.image_lcl}`" alt="">
    </div>
  </div>
<!--  <button @click="console.log('photograph', photograph)" class="px-4 py-3 rounded-md bg-teal-500 text-white text-xs uppercase tracking-wider">Review</button>-->
  <div class="flex divide-x w-full shadow-md">
    <label class="text-xs font-semibold uppercase px-3 py-2">Current Page</label>
    <label class="px-3 py-2"><span class="w-5 h-5 flex justify-center items-center text-xs font-bold bg-red-200 text-red-800 rounded-full">{{ photographs.current_page }}</span></label>
    <label class="text-xs font-semibold uppercase px-3 py-2">Last Page</label>
    <label class="px-3 py-2"><span class="w-5 h-5 flex justify-center items-center text-xs font-bold bg-red-200 text-red-800 rounded-full">{{ photographs.last_page }}</span></label>
    <label class="text-xs font-semibold uppercase px-3 py-2">Per Page</label>
    <label class="px-3 py-2"><span class="w-5 h-5 flex justify-center items-center text-xs font-bold bg-red-200 text-red-800 rounded-full">{{ photographs.per_page }}</span></label>
    <label class="text-xs font-semibold uppercase px-3 py-2">Total</label>
    <label class="px-3 py-2"><span class="w-5 h-5 flex justify-center items-center text-xs font-bold bg-red-200 text-red-800 rounded-full">{{ photographs.total }}</span></label>
    <label class="text-xs font-semibold uppercase px-3 py-2">From</label>
    <label class="px-3 py-2"><span class="w-5 h-5 flex justify-center items-center text-xs font-bold bg-red-200 text-red-800 rounded-full">{{ photographs.from }}</span></label>
    <label class="text-xs font-semibold uppercase px-3 py-2">To</label>
    <label class="px-3 py-2"><span class="w-5 h-5 flex justify-center items-center text-xs font-bold bg-red-200 text-red-800 rounded-full">{{ photographs.to }}</span></label>
  </div>
  <div class="flex divide-x w-full bg-blue-500 justify-end">
    <button @click="firstPage(photographs.first_page_url)" class="bg-blue-500 text-white text-xs font-semibold uppercase px-4 py-2">first page</button>
    <button
        v-for="(link, item) in photographs.links"
        :key="link.label"
        @click="routePage(link.url)"
        :disabled="link.active"
        v-html="link.label"
        :class="{
          'bg-red-500':link.active,
          'bg-blue-500':!link.active,
        }"
        class="text-white text-xs font-semibold uppercase px-3 py-2"></button>
    <button @click="lastPage(photographs.last_page_url)" class="bg-blue-500 text-white text-xs font-semibold uppercase px-4 py-2">last page</button>
  </div>
</template>

<style scoped>

</style>