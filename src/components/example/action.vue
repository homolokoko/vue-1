<script>
  import axios from "axios";
  export default {
    data() {
      return {
        example:{
          name:'',
          age:123,
          is_female:true,
          date_of_birth:''
        }
      }
    },
    mounted() {
      const param_id = this.$route.params.id;
      console.log(param_id);
      axios
          .get(`http://127.0.0.1:5000/example/${param_id}`)
          .then((res) => { this.example = res.data; })
    },
    methods: {
      modify(){
        axios.put(`http://127.0.0.1:5000/example/${this.example._id}`, this.example)
      },
      destroy(){
        axios.delete(`http://localhost:5000/example/${this.example._id}`)
          .then(() => { console.log('Hello'); this.$router.push({path:'/example'}) })
        // const router = this.$router.push({path:'/example'});
      }
    }
  }
</script>

<template>
  <div class="divide-y rounded-lg shadow-lg overflow-hidden border">
    <h3 class="text-xl font-bold capitalize px-4 py-3">Edit</h3>
    <div class="px-4 p-3">
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
      <div class="w-full flex p-3 justify-end space-x-3">
        <router-link class="px-5 py-2 rounded-sm bg-slate-500 hover:bg-slate-700 text-xs font-semibold text-white tracking-wider uppercase" to="/example">back</router-link>
        <button class="px-5 py-2 rounded-sm bg-rose-500 hover:bg-rose-700 text-xs font-semibold text-white tracking-wider uppercase" @click="destroy()">delete</button>
        <button class="px-5 py-2 rounded-sm bg-teal-500 hover:bg-teal-700 text-xs font-semibold text-white tracking-wider uppercase" @click="modify()">update</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>