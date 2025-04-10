<script>
export default {
  name: "Input",
  props: {
    value: ""
  },
  data() {
    return {
      value: "",
    }
  },
}

</script>

<template>
  <input v-model="value" type="text" id="staff_name" class="px-4 py-3 bg-gray-200 bg-opacity-25 duration-200 rounded-t-md border-b-2 border-blue-400 focus:border-blue-600 w-full shadow-md focus:bg-gray-300 focus:outline-none">
</template>

<style scoped>

</style>