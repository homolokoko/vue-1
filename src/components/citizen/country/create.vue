<script>
import axios from "axios";
import swal from "sweetalert2";

export default {
  data() {
    return {
      fill:{
        cc2:'',
        cc3:'',
        name:'',
        official:'',
      }
    }
  },
  methods: {
    submitContinue(){
      axios
          .post(`https://localhost/api/setup/citizen/country`,this.fill)
          .then((response) => {
            swal.fire({
              icon: "success",
              title: "Success",
              timer: 1000,
              showConfirmButton: false,
              timerProgressBar: false,
              toast:true,
              position: "top-right",
            }).then((result) => {
              this.fill = {
                cc2: '',
                cc3: '',
                name: '',
                official: '',
              };
            })
          })
    },
    submitFinish(){
      axios
          .post(`https://localhost/api/setup/citizen/country`,this.fill)
          .then((response) => {
            swal.fire({
              icon: "success",
              title: "Success",
              timer: 1000,
              showConfirmButton: false,
            }).then((result) => {
              this.$router.push({path:'/citizen/country'});
            })
          })
    },
  }
}

</script>

<template>
  <div class="flex flex-col gap-3 p-5 border">
    <label for="">Name</label>
    <input type="text" v-model="fill.name" class="border px-4 py-3 rounded">
    <label for="">Official</label>
    <input type="text" v-model="fill.official" class="border px-4 py-3 rounded">
    <label for="">CC2</label>
    <input type="text" v-model="fill.cc2" class="border px-4 py-3 rounded">
    <label for="">CC3</label>
    <input type="text" v-model="fill.cc3" class="border px-4 py-3 rounded">
    <div class="flex justify-end gap-3">
      <router-link to="/citizen/country" class="px-4 py-3 rounded-md bg-zinc-500 text-white uppercase tracking-wider font-semibold text-xs">back</router-link>
      <button @click="submitContinue()" class="px-4 py-3 rounded-md bg-sky-500 text-white uppercase tracking-wider font-semibold text-xs">submit and continue</button>
      <button @click="submitFinish()" class="px-4 py-3 rounded-md bg-sky-500 text-white uppercase tracking-wider font-semibold text-xs">submit and finish</button>
    </div>
  </div>

</template>

<style scoped>

</style>