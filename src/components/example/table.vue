<script>

import TrashBin from "@/components/icons/trash-bin.vue";
import SimpleModal from "@/components/templates/simple-modal.vue";
import FilePen from "@/components/icons/file-pen.vue";
import axios from "axios";
export default {
  components: {SimpleModal},
  data(){
    return {
      isActive: false,
      example:{
        name:'',
        age:0,
        is_female:false,
        date_of_birth:'',
      },
      examples:[],
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    loadData(){
      axios
          .get("http://127.0.0.1:5000/example")
          .then((res)=>{ this.examples = res.data;console.log('res',res.data) });
    },
    submit(){
      axios
          .post("http://127.0.0.1:5000/example", this.example)
        .then((res)=>{ this.loadData() });
    }
  }
}
</script>

<template>
  <table class="table w-full">
    <thead>
    <tr class="bg-slate-100 text-xs font-semibold">
      <td scope="col" class="px-4 py-2 border text-md font-bold text-neutral-700">Name</td>
      <td scope="col" class="px-4 py-2 border text-md font-bold text-neutral-700">Age</td>
      <td scope="col" class="px-4 py-2 border text-md font-bold text-neutral-700">Female</td>
      <td scope="col" class="px-4 py-2 border text-md font-bold text-neutral-700">Dob</td>
      <td scope="col" class="px-4 py-2 border text-md font-bold text-neutral-700">First Create</td>
      <td scope="col" class="px-4 py-2 border text-md font-bold text-neutral-700">Last Update</td>
      <td scope="col" class="px-4 py-2 border">
        <div class="flex w-full justify-evenly">
          <SimpleModal>
            <template v-slot:trigger>
              <button class="text-teal-600 p-0.5 rounded-full p-0.5 hover:bg-teal-600 hover:text-white ">
                <svg class="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clip-rule="evenodd"/>
                </svg>

              </button>
            </template>
            <template v-slot:title>Create Example</template>
            <template v-slot:default>
              <div class="flex flex-col gap-4 p-5 w-full">
                <label for="name">Name</label>
                <input id="name" v-model="example.name" class="ml-4 border w-full px-4 py-2 rounded-md" type="text">
                <label for="name">Age</label>
                <input id="name" v-model="example.age" class="ml-4 border w-full px-4 py-2 rounded-md" type="number">
                <div class="flex gap-4 ml-5">
                  <div>
                    <label
                        for="yes"
                        class="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-xs hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                    >
                      <div>
                        <p class="text-gray-700">Are you female ?</p>

                        <p class="mt-1 text-gray-900">Yes</p>
                      </div>

                      <input
                          id="yes"
                          name="gender"
                          type="radio"
                          v-model="example.is_female"
                          value="true"
                          class="size-5 border-gray-300 text-blue-500"
                      />
                    </label>
                  </div>

                  <div>
                    <label
                        for="no"
                        class="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-xs hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
                    >
                      <div>
                        <p class="text-gray-700">Are you female ?</p>

                        <p class="mt-1 text-gray-900">No</p>
                      </div>

                      <input
                          id="no"
                          name="gender"
                          type="radio"
                          value="false"
                          v-model="example.is_female"
                          class="size-5 border-gray-300 text-blue-500"
                      />
                    </label>
                  </div>
                </div>
                <label for="name">Date of Birth</label>
                <input id="name" v-model="example.date_of_birth" class="ml-4 border w-full px-4 py-2 rounded-md" type="date">
              </div>
              <div class="w-full flex p-3 justify-end">
                <button class="px-5 py-2 rounded-md bg-teal-500 text-xs font-semibold text-white tracking-wider uppercase" @click="submit()">Submit</button>
              </div>
            </template>
          </SimpleModal>
        </div>
      </td>
    </tr>
    </thead>
    <tbody>
    <tr class="bg-slate-100 text-xs font-normal" v-for="(example, index) in examples" :key="example._id">
      <td class="px-4 py-2 border text-md text-neutral-700"><span v-text="example.name"></span></td>
      <td class="px-4 py-2 border text-md text-neutral-700"><span v-text="example.age"></span></td>
      <td class="px-4 py-2 border text-md text-neutral-700"><span v-text="example.is_female"></span></td>
      <td class="px-4 py-2 border text-md text-neutral-700"><span v-text="example.date_of_birth"></span></td>
      <td class="px-4 py-2 border text-md text-neutral-700"><span v-text="example.createdAt"></span></td>
      <td class="px-4 py-2 border text-md text-neutral-700"><span v-text="example.updatedAt"></span></td>
      <td class="px-4 py-2 border text-md text-neutral-700">
        <div class="w-full flex justify-center gap-3">
          <router-link :to="`/example/${example._id}/action`"><FilePen :className="' text-sky-700 hover:text-white hover:bg-sky-700 p-0.5 rounded-md'" /></router-link>
          <button><TrashBin :className="' text-rose-700 hover:text-white hover:bg-rose-700 p-0.5 rounded-md'" /></button>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>

</style>