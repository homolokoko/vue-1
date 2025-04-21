<script>

export default {
    name: 'FileUpload',
    props: {
      value:'',
    },
    data() {
      return {
        show:false,
        value:'',
      }
    },
    methods: {
      async uploaded(e){
        const src = e.target.files[0];
      }
    }
  }
</script>

<template>
  <div class="w-full h-full flex justify-center items-center relative p-5 bg-slate-50 border-double border-2 rounded-lg">
    <input type="file" class="absolute w-full h-full opacity-0" @change="uploaded">
    <label for="" class="px-5 py-2 rounded-lg bg-teal-600 text-white text-xs font-semibold">Browse</label>
  </div>
</template>

<style scoped>

</style>