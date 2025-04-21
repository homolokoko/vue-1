<script>
export default {
  data(){
    return {
      param:'',
    }
  },
  mounted() {
    this.param = this.$route.params.id;
  }
}
</script>

<template>
  <p>I am detail {{param}}</p>
</template>