<template>
  <div>
    <div v-for="(production, key) in data">
      <cards-group :title="key" :data="production"></cards-group>
    </div>
  </div>
</template>

<script>
  import {dataCards} from '../../services/api/info.js'
  import CardsGroup from './info-widgets/CardsGroup.vue'

  export default {
    components: {
      CardsGroup
    },
    name: 'dashboard-info-widgets',
    data () {
      return {
        weekly_prod: '',
        daily_prod: '',
        data: {}
      }
    },
    methods: {
      feedCards (feed) {
        this.data = feed.data
      }
    },
    mounted () {
      dataCards()
        .then(rsp => this.feedCards(rsp))
        .catch(e => console.error(e))
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../sass/_variables.scss";

  .stats-number, .stats-title {
    line-height: 1;
  }

  .info-widget-inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;

    &.has-chart {
      justify-content: space-between;
    }

    .stats {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }

  .stats-number {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 2.625rem;
    margin-bottom: 0.5rem;

    .stats-icon {
      font-size: 1.5625rem;
      position: absolute;
      top: 0.625rem;
      left: -1.25rem;

      &.icon-wide {
        left: -1.875rem;
      }
    }
  }

</style>
