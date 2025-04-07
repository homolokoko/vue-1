<script setup>

</script>

<template>
  <div class="space-y-">
    <div class=" flex font-semibold uppercase tracking-wide text-xs w-full bg-sky-100 rounded-t-lg overflow-hidden ">
      <router-link class="px-5 py-4" activeClass="bg-cyan-500 text-white" to="/citizen/country">Country</router-link>
      <router-link class="px-5 py-4" activeClass="bg-cyan-500 text-white" to="/citizen/state">State</router-link>
      <router-link class="px-5 py-4" activeClass="bg-cyan-500 text-white" to="/citizen/city">City</router-link>
      <router-link class="px-5 py-4" activeClass="bg-cyan-500 text-white" to="/citizen/people">Citizen</router-link>
    </div>
    <div class="block rounded-lg"><router-view></router-view></div>
  </div>
</template>

<style scoped>

</style>