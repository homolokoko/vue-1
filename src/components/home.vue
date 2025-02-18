<script>
  import Card from "@/components/links/card.vue";
  export default {
    components: {Card},
    data(){
      return {
        routes:[
          {
            title: "Home",
            path: "/home",
            desc: "Home",
            date_time: "2018-02-02",
          },
          {
            title: "About",
            path: "/about",
            desc: "About",
            date_time: "2018-02-01",
          }
        ]
      }
    }
  }
</script>

<template>
  <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
    <Card v-for="(route, index) in routes"
          :key="index"
          :title="route.title"
          :path="route.path"
          :desc="route.desc"
          :date_time="route.date_time"
    ></Card>
  </div>
</template>

<style scoped>

</style>