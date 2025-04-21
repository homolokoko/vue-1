<script>
import _ from "lodash";
export default {
  data() {
    return {
      list:{
        data:[]
      }
    }
  },
  mounted() {
    _.times(24,(i)=>{
        this.list.data.push({name:`name_${i}`,is_published:i%3===0})
    })
  },
  methods: {},
}
</script>

<template>
  <div class="grid grid-cols-3 gap-3">
    <div v-for="(item, i) in list.data" :key="i"
         class="item p-3 rounded-lg shadow-lg border text-sm space-y-3">
      <img src="/not-found.png" alt="">
      <div class="flex justify-between"><span v-text="item.name"></span><span>release date</span></div>
      <div class="flex justify-between">
        <div class="flex gap-3"><span :class="item.is_published ? 'bg-green-500':'border'" class="w-5 h-5 rounded-full"></span><span>Published</span></div>
        <router-link :to="`product/${i}`" class="bg-indigo-500 text-white text-xs uppercase tracking-wider font-semibold px-4 py-1 rounded-md">Detail</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>