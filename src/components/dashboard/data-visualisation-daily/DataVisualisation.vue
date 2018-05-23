<template>
  <div class="data-visualization">
    <div class="row">
      <div class="col-md-12">
       <my-chart title="Produção Diária" type="line" :data="lineChartData"></my-chart>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <my-chart title="Produção Semanal" type="vertical-bar" :data="verticalChartData"></my-chart>
      </div>
      <div class="col-md-6">
        <my-chart title="Produção Mensal" type="pie" :data="pieChartData"></my-chart>
      </div>
    </div>
  </div>
</template>

<script>
  import LineChartData from 'data/charts/LineChartData'
  import VerticalBarChartData from 'data/charts/VerticalBarChartData'
  import PieChartData from 'data/charts/PieChartData'
  import MyChart from './MyChart.vue'

  export default {
    components: {
      MyChart
    },
    name: 'data-visualisation',
    data () {
      return {
        lineChartData: LineChartData,
        verticalChartData: VerticalBarChartData,
        pieChartData: PieChartData,
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../sass/_variables.scss";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";
  @import "~bootstrap/scss/mixins/breakpoints";
  .chart-container {
    padding: 0 2rem;
    height: 24rem;
  }

  .center {
    text-align: center;
    margin: auto;
    margin-bottom: 20px;
  }


</style>
