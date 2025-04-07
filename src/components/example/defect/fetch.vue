<script>
import axios from "axios";

export default {
  data() {
    return {
      data:[],
    }
  },
  mounted() {
    axios.get(`https://localhost/api/defect`)
        .then(res => { this.data = res.data })
  }
}
</script>

<template>
  <div class="p-5 rounded-lg shadow-lg">
    <table class="w-full">
      <thead>
      <tr class="divide-x bg-slate-50">
        <td class="px-4 py-2 text-sm font-semibold">Cn</td>
        <td class="px-4 py-2 text-sm font-semibold">En</td>
        <td class="px-4 py-2 text-sm font-semibold">Kh</td>
        <td class="px-4 py-2 text-sm font-semibold">Create</td>
      </tr>
      </thead>
      <tbody>
      <tr class="divide-x shadow-sm" v-for="(item, index) in data" :key="item.id">
        <td class="px-4 py-2 text-xs font-semibold" v-for="(lang, i) in item.translations" :key="lang.id">
          <span v-text="lang.name"></span>
        </td>
        <td class="px-4 py-2 text-sm font-semibold"><div class="flex gap-3">edit</div></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>