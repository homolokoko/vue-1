<script>
import * as echarts from "echarts";
export default {
  mounted(){
    let chart = echarts.init(this.$refs.main)
    var option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ]
        }
      ]
    };

    // Display the chart using the configuration items and data just specified.
    chart.setOption(option);
  }
}
</script>

<template>
  <div class="w-auto">
    <span ref="main" style="width:20rem;height:25rem"></span>
    <div class=" flex justify-evenly">
      <div>
        <label for="" class="flex">
          <span class="w-5 h-5 rounded-full bg-blue-500"></span>
            <span>Weekly Targets</span>
        </label>
        <span class="block font-semibold text-center">$ 2,689</span>
      </div>
      <div>
        <label for="" class="flex ">
          <span class="w-5 h-5 rounded-full bg-teal-500"></span>
          <span>Monthly Targets</span>
        </label>
        <span class="block font-semibold text-center">$ 2,689</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>