<script setup>

import SideNav from "@/layouts/side-nav.vue";
</script>

<template>
  <div class="flex">
    <SideNav></SideNav>
    <div class="p-12 w-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>

</style>