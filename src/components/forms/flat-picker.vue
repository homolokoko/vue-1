<script>
import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.css';
export default {
  name: "Flatpickr",
  mounted(){
    flatpickr(
        this.$refs.flatpickr,
        {
          enableTime: true,
        }
    );
  }
}
</script>

<template>
  <input ref="flatpickr" type="text" class="px-4 py-3 bg-gray-200 bg-opacity-25 duration-200 rounded-t-md border-b-2 border-blue-400 focus:border-blue-600 w-full shadow-md focus:bg-gray-300 focus:outline-none">
</template>