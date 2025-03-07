<script>
  import {useRoute} from "vue-router";
  import axios from "axios";

  export default {
    data(){
      return {
        name:'',
        store:{}
      }
    },
    setup() {
      const route = useRoute();
      const param = route.params.id;
      return { param };// Access the route parameter
    },
    mounted() {
      axios
          .get(
              `http://localhost:8000/api/admin/store/${this.param}/edit-one`
          )
          .then(res => {
            this.store = res.data
            this.name = this.store.name
          })
    },
    methods:{
      update(){
        axios
            .put(
                `http://localhost:8000/api/admin/store/${this.param}/update-one`,
                {name:this.name},
            )
            .then(res => { this.name = res.data.name })
      },
      destroy(){
        axios
            .delete(
                `http://localhost:8000/api/admin/store/${this.param}/delete-one`
            )
            .then(res => { this.name = res.data.name })
      },
    }

  }
</script>

<template>
  <div class="rounded-lg bg-white shadow-lg overflow-hidden min-w-80 space-y-4">
    <div class="border-b flex px-5 py-4 justify-between">
      <h3 class="font-bold text-lg capitalize text-neutral-600 tracking-wide">Operation</h3>
    </div>
    <div class="border-b flex justify-center items-center px-5 py-4">
      <div class="space-y-3">
        <label class="block font-semibold" for="">Name</label>
        <input type="text" v-model="name" class="px-4 py-2 rounded border w-full outline-teal-600" placeholder="type here">
      </div>
    </div>
    <div class="flex w-full justify-end gap-5 px-5 py-4">
      <router-link to="/store"><button class="bg-slate-600 px-4 py-2 rounded text-white font-semibold text-xs tracking-wider uppercase">back</button></router-link>
      <button @click="update()" class="bg-teal-600 px-4 py-2 rounded text-white font-semibold text-xs tracking-wider uppercase">update</button>
      <button @click="destroy()" class="bg-rose-600 px-4 py-2 rounded text-white font-semibold text-xs tracking-wider uppercase">delete</button>
    </div>
  </div>
</template>

<style scoped>

</style>