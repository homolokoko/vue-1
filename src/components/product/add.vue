<script>
import Input from "@/components/forms/input.vue";
import Select from "@/components/forms/select.vue";
import InputPassword from "@/components/forms/input-password.vue";

  export default {
    components: {Input,Select,InputPassword},
    data() {
      return {
        filter:{
          sewing:'',
          staff_name:'',
          new_password:'',
          confirm_password:'',
          selected_roles:[]
        },
        sewingList:[],

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
            <label for="staff_name" class="text-sm">Staff Name</label>
            <div class="p-3"><Input :value="filter.staff_name" /></div>
          </div>
          <div class="block">
            <label for="confirm_password" class="text-sm">New Password</label>
            <div class="p-3"><InputPassword :value="filter.new_password" /></div>
          </div>
          <div class="block">
            <label for="confirm_password" class="text-sm">Confirm Password</label>
            <div class="p-3"><InputPassword :value="filter.confirm_password" /></div>
          </div>
          <div class="block">
            <label for="Role" class="text-sm">Role</label>
            <div class="p-3">
              <select v-model="filter.selected_roles" type="select" id="Role" class="px-4 py-3 bg-gray-200 bg-opacity-25 duration-200 rounded-t-md border-b-2 border-blue-400 focus:border-blue-600 w-full shadow-md focus:bg-gray-300 focus:outline-none">
                <option value="" selected>please choose</option>
                <option v-for="(role, i) in roles" :key="role.value" :value="role.value" :text="role.text"></option>
              </select>
            </div>
          </div>
          <div class="block">
            <label for="sewing" class="text-sm">Sewing</label>
            <div class="p-3"><Select v-model="filter.sewing" :list="sewingList" /></div>
          </div>
          <div class="block flex justify-end items-end p-2">
            <button @click="submit()" class="px-4 py-2 rounded bg-indigo-500 text-xs font-semibold text-white tracking-wider">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>