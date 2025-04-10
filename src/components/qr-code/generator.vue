<script>
import QRCode from "qrcode";
import _ from "lodash";
import swal from "sweetalert2";
import QrCode from "@/components/templates/qr-code.vue";
export default {
  components: {
    QrCode
  },
  data(){
    return {
      filter:{
        tag:"",
        amount:0
      },
      list:[]
    }
  },
  methods:{
    async generateCode(number){
      let canvasElement = []
      let canvas = document.createElement("canvas");
      _.times(this.filter.amount,  async (number)=>{
        try {
           await QRCode.toCanvas(canvas, number, (error)=> {
             if (error) console.error(error)
             console.log('success!');
           });
          canvasElement.push(canvas);
          console.log(`QR Code generated for: ${number}`);
        } catch (error) {
          console.error(`Error generating QR Code for "${number}":`, error);
        }
      })
      console.log('canvasElement',canvasElement);
      return canvasElement;
    },
    generate(){
      if(this.filter.amount <= 0){
        swal.fire({
          icon: 'error',
          title: 'Oop...!',
          text: 'You forget to put amount',
        })
      }else{
        swal.fire({
          icon: 'success',
          title: 'Nice ...',
          text: `You sure want to generate ${this.filter.amount} Qr codes.`,
          showCancelButton: true,
        }).then(result => {
          if (result.isConfirmed) {
            _.times(this.filter.amount,  async (number)=>{
              this.list.push({value:number, text: `${this.filter.tag}-${number}-${_.random(1000, 9999)}`})
            })
          }
        })
      }
    }
  },
  mounted(){

  }
}
</script>

<template>
  <div class="space-y-4">
    <h3 class="font-serif text-lg capitalize font-bold">Generator</h3>
    <div class="p-10">
      <div class="p-5 bg-white shadow-lg">
        <div class="space-y-4">
          <label class="block" for="">Tag</label>
          <input v-model="filter.tag" type="text" class="border w-full px-4 py-2 rounded-md ml-3">
          <label class="block" for="">Amount</label>
          <input v-model="filter.amount" type="text" class="border w-full px-4 py-2 rounded-md ml-3">
          <div class="flex w-full justify-end">
            <button v-if="filter.tag.length > 4" @click="generate()" class="px-4 py-2 rounded bg-teal-500 text-white capitalize">generate</button>
          </div>
          <div ref="canvasElem" class="grid grid-cols-10 gap-3"></div>
        </div>
        <div class="">
          <div class="grid grid-cols-3 gap-3">
            <QrCode v-for="(item, i) in list" :key="item.value" :text="item.text"></QrCode>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
