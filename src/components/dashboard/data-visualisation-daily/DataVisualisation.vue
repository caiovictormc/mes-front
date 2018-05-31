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
  import { getMonthly, getWeekly } from '../../../services/api/info'
  import { safeMonthly, safeWeekly } from 'data/charts/Dashboard.js'
  import MyChart from './MyChart.vue'


  export default {
    components: {
      MyChart
    },
    name: 'data-visualisation',
    data () {
      return {
        lineChartData: LineChartData,
        verticalChartData: null,
        pieChartData: null,
      }
    },
    mounted () {
      this.fillMonthlyData()
      // this.fetchDataMonthly()
    },
    methods: {
      fillMonthlyData () {
        getMonthly()
          .then(rsp => {
            this.pieChartData = safeMonthly(rsp.data)
          })
        getWeekly()
          .then(rsp => {
            this.verticalChartData = safeWeekly(rsp.data)
          })
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
