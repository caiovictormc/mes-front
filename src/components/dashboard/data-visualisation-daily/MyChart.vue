<template>
     <vuestic-widget>
          <div class="data-visualisation-daily dashboard-tab">
            <div class="row">
              <!-- <div class="col-md-6"> -->
                <h3 class="center">{{title}}</h3>
              <!-- </div> -->
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="chart-container">
                  <vuestic-chart v-bind:data="data" :type="type"></vuestic-chart>
                </div>
              </div>
            </div>
          </div>
        </vuestic-widget>
</template>

<script>
export default {
  props: ['title', 'type', 'data'],
  name: 'my-chart'
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
