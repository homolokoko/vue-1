<script>
import * as echarts from "echarts";
export default {
  mounted(){
    let chart = echarts.init(this.$refs.main)
    var option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        }
      ]
    };

    // Display the chart using the configuration items and data just specified.
    chart.setOption(option);
  }
}
</script>

<template>
  <span ref="main" style="width:40rem;height:25rem"></span>
</template>

<style scoped>

</style>