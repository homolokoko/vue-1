<script setup>

import Side from "@/layouts/eccomi/side.vue";
</script>

<template>
  <div class="w-full h-full flex divide-x">
    <div class="side-nav bg-white min-h-screen w-1/4"><Side></Side></div>
    <div class="content p-5 bg-slate-100 border w-full h-full min-h-svh"><router-view></router-view></div>
  </div>
</template>

<style scoped>

</style>