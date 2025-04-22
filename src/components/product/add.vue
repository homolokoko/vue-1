<script>
import Input from "@/components/forms/input.vue";
import Select from "@/components/forms/select.vue";
import FileUpload from "@/components/forms/file-upload.vue";
import InputPassword from "@/components/forms/input-password.vue";
import MultiFileUpload from "@/components/forms/multi-file-upload.vue";
import Flatpickr from "@/components/forms/flat-picker.vue";

  export default {
    components: {
      Flatpickr,
      Input,
      Select,
      FileUpload,
      InputPassword,
      MultiFileUpload,
    },
    data() {
      return {
        filter:{
          files:[],
          name:'',
          release_date:'',
        },
        sewingList:[],

      }
    },
    methods: {
      submit(){
        console.log('filter', this.filter)
      }
    }
  }
</script>

<template>
  <div>
    <div class="p-10">
      <div class="p-5 rounded-lg bg-white">
        <div class="flex flex-col gap-4">
          <div class="block">
            <label for="staff_name" class="text-sm">Name</label>
            <div class="p-3"><Input @update-value="filter.name=$event" /></div>
          </div>
          <div class="block">
            <label for="staff_name" class="text-sm">Release Date</label>
            <div class="p-3"><Flatpickr @update-value="filter.release_date" /></div>
          </div>
          <div class="block">
            <label for="staff_name" class="text-sm">Photos</label>
            <div class="p-3"><MultiFileUpload @update-value="filter.files=$event" /></div>
          </div>
          <div class="flex justify-end items-end p-2">
            <button @click="submit()" class="px-4 py-2 rounded bg-indigo-500 text-xs font-semibold text-white tracking-wider">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>