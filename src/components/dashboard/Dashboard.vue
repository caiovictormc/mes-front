<template>
  <div class="dashboard">

    <dashboard-info-widgets></dashboard-info-widgets>
    <data-visualisation></data-visualisation>

  </div>
</template>

<script>
  import DashboardInfoWidgets from './DashboardInfoWidgets'
  import DataVisualisation from './data-visualisation/DataVisualisation.vue'

  export default {
    name: 'dashboard',
    components: {
      DataVisualisation,
      DashboardInfoWidgets,
    }
  }

</script>
<style lang="scss" scoped>
  @import "../../sass/_variables.scss";
</style>
