<script>
import axios from "axios";
import _ from "lodash";
import QrCode from "@/components/templates/qr-code.vue";
import QRCode from "qrcode";

export default {
  components: {QrCode},
  data(){
    return {
      list:{},
    }
  },
  methods:{
    async initialPage(){

      await axios
          .get(`http://localhost/api/qr-code`)
          .then((response)=>{
              _.map(response.data.data, async (obj)=>{
                 await QRCode.toDataURL(obj.ticketID)
                    .then((response)=>{ obj.imgUrl=response });
              })
            this.list = response.data
          })
    },
    imageBase64(text){
      return QRCode.toDataURL(text)
    },
    download(){
      _.each(this.list.data,(item)=>{
        this.downloadBase64Image(item.imgUrl,item.ticketID)
      })
    },
    downloadBase64Image(base64Data, filename) {
      // Create a link element
      const link = document.createElement('a');
      link.href = base64Data; // Set the href to the Base64 data
      link.download = filename; // Set the filename for download
      document.body.appendChild(link); // Append the link to the body
      link.click(); // Trigger the download
      document.body.removeChild(link); // Remove the link from the document
    },
    async firstPage(url){
      await axios
          .get(url)
          .then((response)=>{
            _.map(response.data.data, async (obj)=>{
              await QRCode.toDataURL(obj.ticketID)
                  .then((response)=>{ obj.imgUrl=response });
            })
            this.list = response.data
          })
    },
    async lastPage(url){
      await axios
          .get(url)
          .then((response)=>{
            _.map(response.data.data, async (obj)=>{
              await QRCode.toDataURL(obj.ticketID)
                  .then((response)=>{ obj.imgUrl=response });
            })
            this.list = response.data
          })
    },
    async selectPage(url){
      await axios
          .get(url)
          .then((response)=>{
            _.map(response.data.data, async (obj)=>{
              await QRCode.toDataURL(obj.ticketID)
                  .then((response)=>{ obj.imgUrl=response });
            })
            this.list = response.data
          })
    },
  },
  mounted(){
    this.initialPage();
  }
}

</script>

<template>
  <div class="grid grid-cols-10 gap-3">
    <div
        v-for="(item, index) in list.data"
        class="border flex flex-col">
      <div class="px-4 py-2 text-xs"><span v-text="item.ticketID"></span></div>
      <img :src="item.imgUrl" alt="">
    </div>
    <div class="col-span-10"><button @click="download()" class="w-full px-4 py-2 bg-teal-500 text-white">download</button></div>
  </div>
  <div v-if="Object.keys(list).length > 0" class="flex divide-x text-xs font-semibold">
    <button
        @click="firstPage(list.first_page_url)"
        class="bg-zinc-400 px-4 py-2 text-white text-xs uppercase focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">first page</button>
    <button
        v-for="(link, index) in list.links"
        :key="link.label"
        :disabled="link.active || !link.url"
        @click="selectPage(link.url)"
        :class="{
                'bg-zinc-400': !link.active,
                'bg-zinc-500 ring-2 ring-offset-2 ring-sky-500': link.active,
              }"
        class="px-4 py-2 focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 text-white text-xs uppercase"><span v-html="link.label"></span></button>
    <button
        @click="lastPage(list.last_page_url)"
        class="bg-zinc-400 px-4 py-2 text-white text-xs uppercase focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">last page</button>
  </div>
</template>

<style scoped>

</style>