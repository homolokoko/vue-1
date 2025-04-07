<script setup>
import Target from "@/components/dashboard/target.vue";
import UserHit from "@/components/dashboard/user-hit.vue";
import TotalRevenue from "@/components/dashboard/total-revenue.vue";
import TotalOrders from "@/components/dashboard/total-orders.vue";
import NewCustomer from "@/components/dashboard/new-customer.vue";
import TotalDelivery from "@/components/dashboard/total-delivery.vue"
</script>
<template>
  <div class="w-full justify-between flex gap-5">
    <div class="col-span-1 child:w-full bg-white rounded-lg  p-7"><Target></Target></div>
    <div class="col-span-3 child:w-full bg-white rounded-lg  p-7"><UserHit></UserHit></div>
  </div>
  <div class="grid grid-cols-4 gap-5 mt-5">
    <div class="p-5 rounded-lg bg-white"><TotalRevenue /></div>
    <div class="p-5 rounded-lg bg-white"><TotalOrders /></div>
    <div class="p-5 rounded-lg bg-white"><NewCustomer /></div>
    <div class="p-5 rounded-lg bg-white"><TotalDelivery /></div>
  </div>


</template>

<style scoped>

</style>