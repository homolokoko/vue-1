<script>
import _ from "lodash";
export default {
  data(){
    return {
      photographs:[]
    }
  },
  mounted(){
    _.times(10, ()=>{
      this.photographs.push({});
    })
  },
  methods:{
    changeImage(text,index){
      this.photographs[index].path=text;
      this.photographs[index].src=`https://localhost/storage/tmp${text}`;
    },
    emptyImage(index){
      this.photographs[index].path=null;
    },
    save(){
      console.log('photograph', this.photographs);
    }
  }
}

</script>

<template>
  <div class="grid grid-cols-2">
    <div v-for="(photograph, index) in photographs" :key="index"
        class="relative border divide-y">
      <div class="w-full relative">
        <img :src="!photograph.src ? '/example.png': photograph.src" alt="">
        <input @input.stop="changeImage($event.target.value,index)" @focusout="emptyImage(index)" v-model="photograph.path" type="text" class="h-full w-full absolute top-0 left-0 opacity-0">
      </div>
      <input type="text" class="px-2 py-2 w-full" placeholder="type here ....">
    </div>
  </div>

  <button @click="save()" class="px-4 py-3 rounded-md text-xs font-semibold uppercase traking-wider text-white bg-teal-500">save</button>
</template>

<style scoped>

</style>