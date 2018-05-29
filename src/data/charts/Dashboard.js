import store from 'vuex-store'
import { dataMonthly } from '../../services/api/info'
import {default_colors} from './colors.js'


export function safeMonthly (apiResponse) {
  var dataSchema = {
    labels: [], datasets: [{backgroundColor: [], data: []}]
  }
  var labels = Object.keys(apiResponse)
  var datasets = []

  var i = 0
  for (var value in apiResponse) {
    datasets.push(apiResponse[value])
    dataSchema.datasets[0].backgroundColor.push(default_colors[i])
    i += 1
  }

  dataSchema.labels = labels
  dataSchema.datasets[0].data = datasets
  return dataSchema
}