<template>
  <div class="data-visualization">
    <daily-line></daily-line>
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget>
          <div class="data-visualisation-daily dashboard-tab">
            <div class="row">
              <!-- <div class="col-md-6"> -->
                <h3 class="center">Produção Diária</h3>
              <!-- </div> -->
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="chart-container">
                  <vuestic-chart v-bind:data="lineChartData" type="line"></vuestic-chart>
                </div>
              </div>
            </div>
          </div>
        </vuestic-widget>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <vuestic-widget>
          <div class="data-visualisation-daily dashboard-tab">
            <div class="row">
              <h4 class="center">Produção Semanal</h4>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="chart-container">
                  <vuestic-chart v-bind:data="verticalChartData" type="vertical-bar"></vuestic-chart>
                </div>
              </div>
            </div>
          </div>
        </vuestic-widget>
      </div>
      <div class="col-md-6">
        <vuestic-widget>
          <div class="data-visualisation-daily dashboard-tab">
            <div class="row">
              <h4 class="center">Gráfico de Produção Mensal</h4>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="chart-container">
                  <vuestic-chart v-bind:data="pieChartData" type="pie"></vuestic-chart>
                </div>
              </div>
            </div>
          </div>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
  import LineChartData from 'data/charts/LineChartData'
  import VerticalBarChartData from 'data/charts/VerticalBarChartData'
  import PieChartData from 'data/charts/PieChartData'

  export default {
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
