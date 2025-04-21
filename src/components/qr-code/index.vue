<script>

</script>

<template>
  <div class="space-y-4">
    <h3 class="font-serif text-lg font-bold capitalize">Qr Code Management</h3>
    <div class="p-7">
      <div class="p-5 rounded-lg bg-white shadow-lg">

        <div class="flex bg-slate-50 rounded-t-lg border-double border-2">
          <router-link
              to="/qr-code/list"
              activeClass="bg-teal-500 text-white"
              class="px-5 py-2 rounded-t-lg">LIST</router-link>
          <router-link
              to="/qr-code/view"
              activeClass="bg-teal-500 text-white"
              class="px-5 py-2 rounded-t-lg">VIEW</router-link>
        </div><div class="p-3 border-2 border-double"><router-view></router-view></div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>