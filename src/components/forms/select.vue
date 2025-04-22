<script>
export default {
  name: "Select",
  props: {
    value: {
      type: String,
      required: true
    },
    list:{
      type: Array,
      required: true
    }
  },
  computed: {
    value:'',
  },
  methods: {
    selectedValue(e){
      this.$emit('update-value', e.target.value);
    }
  }
}

</script>

<template>
  <select @change="selectedValue" class="px-4 py-3 bg-gray-200 bg-opacity-25 duration-200 rounded-t-md border-b-2 border-blue-400 focus:border-blue-600 w-full shadow-md focus:bg-gray-300 focus:outline-none">
    <option v-for="(item, i) in list" :key="item.value" :value="item.value" :text="item.text">Sew 1</option>
  </select>
</template>

<style scoped>

</style>