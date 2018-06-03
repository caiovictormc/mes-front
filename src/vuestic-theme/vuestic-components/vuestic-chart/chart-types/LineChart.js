import {Line, mixins} from 'vue-chartjs'
import DefaultOptions from '../DefaultOptions'

export default Line.extend({
  props: ['chartData', 'options'],
  mixins: [mixins.reactiveProp],
  data () {
    return {
      defaultOptions: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [ {
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true,
              offsetGridLines: true
            },
            offset: true
          }]
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },


  mounted () {
    let options = Object.assign({}, DefaultOptions, this.defaultOptions, this.options)
    this.renderChart(this.chartData, options)
  }
})
