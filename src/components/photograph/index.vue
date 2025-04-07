<script>
import Preview from "@/components/photograph/preview.vue";
import Upload from "@/components/photograph/upload.vue";
export default {
  components: {Preview, Upload},
}
</script>

<template>
  <div class="flex w-full">
    <div class="w-1/2"><Upload></Upload></div>
    <div class="w-1/2"><Preview></Preview></div>
  </div>
</template>

<style scoped>

</style>