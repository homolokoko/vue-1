<script>
import QRCode from "qrcode";
export default {
  name: "QrCode",
  props: {
    text:'',
  },
  data(){
    return {
      imgUrl:''
    }
  },
  mounted(){
    this.imageBase64()
  },
  methods:{
    imageBase64(){
      const qrcode = QRCode.toDataURL(this.text)
          .then(url => {
            this.imgUrl = url;
          })
          .catch(err => {
            console.error(err)
          })
    },
    download(){
      this.downloadBase64Image(this.imgUrl, `${this.text}.png`);
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
  }
}
</script>

<template>
  <div class="flex flex-col border shadow-lg">
    <img :src="imgUrl" alt="">
    <button @click="download()" class="px-4 py-2 border w-full bg-teal-500 text-white uppercase text-xs font-semibold">download</button>
  </div>
</template>