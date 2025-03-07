<script>
  import axios from "axios";
  import Modal from "@/components/templates/modal.vue";
  import useModalStore from "@/stores/store/modal.js";
  import TrashBin from "@/components/icons/trash-bin.vue";
  import FilePen from "@/components/icons/file-pen.vue";
  import {mapActions, mapState} from "pinia";
  export default {
    components: {Modal, TrashBin, FilePen},
    computed: {
      ...mapState(useModalStore,["isOpen"])
    },
    data() {
      return {
        name: '',
        popUpOpen: false,
        stores: []
      }
    },
    methods: {
      loadData(){
        axios
            .get("http://127.0.0.1:8000/api/admin/store")
            .then((res) => { this.stores = res.data; })
      },
      submit(){
        axios
            .post(
                "http://127.0.0.1:8000/api/admin/store/save-one",
                {
                  name:
                  this.name
                }
            )
            .then((response) => {this.closeModal()})
      },
      ...mapActions(useModalStore, ["openModal","closeModal"]),
    },
    mounted() {
      this.loadData();
    },
  }
</script>

<template>
  <table class="table w-full">
    <thead>
      <tr class="bg-slate-100 text-xs font-semibold">
        <td scope="col" class="px-4 py-2 border text-md font-bold text-neutral-700">Name</td>
        <td scope="col" class="px-4 py-2 border text-md font-bold text-neutral-700">First Create</td>
        <td scope="col" class="px-4 py-2 border text-md font-bold text-neutral-700">Last Update</td>
        <td scope="col" class="px-4 py-2 border">
          <div class="flex w-full justify-evenly">
            <Modal :isActive="popUpOpen">
              <template v-slot:trigger>
                <button class="text-teal-600 p-0.5 rounded-full p-0.5 hover:bg-teal-600 hover:text-white ">
                  <svg class="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clip-rule="evenodd"/>
                  </svg>

                </button>
              </template>
              <template v-slot:title>Modal</template>
              <template v-slot:content>
                <div class="space-y-3">
                  <label class="block font-semibold" for="">Name</label>
                  <input type="text" v-model="name" class="px-4 py-2 rounded border w-full outline-teal-600" placeholder="type here">
                </div>
              </template>
              <template v-slot:btngroup>
                <button @click="closeModal" class="border-teal-600 px-4 py-2 rounded text-teal-600 border font-semibold text-xs tracking-wider uppercase">cancel</button>
                <button @click="submit()" class="bg-teal-600 px-4 py-2 rounded text-white font-semibold text-xs tracking-wider uppercase">submit</button>
              </template>
            </Modal>
          </div>
        </td>
      </tr>
    </thead>
    <tbody>
    <tr class="bg-slate-100 text-xs font-normal" v-for="(store, index) in stores.data" :key="store.id">
      <td class="px-4 py-2 border text-md text-neutral-700"><span v-text="store.name"></span></td>
      <td class="px-4 py-2 border text-md text-neutral-700"><span v-text="store.first_create"></span></td>
      <td class="px-4 py-2 border text-md text-neutral-700"><span v-text="store.last_update"></span></td>
      <td class="px-4 py-2 border text-md text-neutral-700">
        <div class="w-full flex justify-center gap-3">
          <router-link :to="`/store/${store.id}/action`"><FilePen :className="' text-sky-700 hover:text-white hover:bg-sky-700 p-0.5 rounded-md'" /></router-link>
          <button><TrashBin :className="' text-rose-700 hover:text-white hover:bg-rose-700 p-0.5 rounded-md'" /></button>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>

</style>