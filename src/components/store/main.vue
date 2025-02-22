<script>
  import axios from "axios";
  import Modal from "@/components/templates/modal.vue";
  import useModalStore from "@/stores/store/modal.js";
  import {mapActions, mapState} from "pinia";
  export default {
    components: {Modal},
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
      submit(){
        axios
            .post("http://127.0.0.1:8000/api/store/save-one", {name: this.name})
            .then((response) => {console.log(response)})
      },
      ...mapActions(useModalStore, ["openModal","closeModal"]),
    },
    mounted() {
      axios
      .get("http://127.0.0.1:8000/api/store/load")
      .then((res) => { this.stores = res.data; })
    },
  }
</script>

<template>
  <table class="table w-full">
    <thead>
      <tr class="bg-slate-100">
        <td scope="col" class="px-4 py-2 border text-md font-bold text-neutral-700">Name</td>
        <td scope="col" class="px-4 py-2 border text-md font-bold text-neutral-700">Date</td>
        <td scope="col" class="px-4 py-2 border">
          <div class="flex w-full justify-evenly">
            <span class=" text-md font-bold text-neutral-700">Action</span>
            <Modal :isActive="popUpOpen">
              <template v-slot:trigger>
                <button class="bg-teal-600 px-4 py-2 rounded text-white font-semibold text-xs tracking-wider uppercase">open</button>
              </template>
              <template v-slot:title>Modal</template>
              <template v-slot:content>
                <div class="space-y-3">
                  <label class="block font-semibold" for="">Name</label>
                  output: <span v-text="name"></span>
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
    <tr class="bg-slate-100" v-for="store in stores" :key="store.id">
      <td class="px-4 py-2 border text-md text-neutral-700"><span v-text="store.name"></span></td>
      <td class="px-4 py-2 border text-md text-neutral-700"><span v-text="store.date"></span></td>
      <td class="px-4 py-2 border text-md text-neutral-700">

      </td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>

</style>