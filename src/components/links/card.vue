<script>
  export default {
    props: {
      title: "",
      path: "",
      desc: "",
      date_time: ""
    }
  }
</script>

<template>

  <router-link :to="path" >
      <article
        class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-xs hover:[animation-duration:_4s]"
      >
        <div class="rounded-[10px] bg-white p-4 sm:p-6">
          <h3 class="text-xl font-bold uppercase tracking-widest"><span v-text="title"></span></h3>
          <time datetime="2022-10-10" class="block text-xs text-gray-500"> <span v-text="date_time"></span> </time>

          <h3 class="mt-0.5 text-lg font-medium text-gray-900"><span v-text="desc"></span></h3>

          <div class="mt-4 flex flex-wrap gap-1">
            <span class="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs whitespace-nowrap text-purple-600">
              Snippet </span>
          </div>
        </div>
    </article>
  </router-link>
</template>

<style scoped>

</style>