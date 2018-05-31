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

export function safeWeekly (apiResponse) {
  var dataSchema = {
    labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    datasets: []
  }
  var i = 0

  for (var day in apiResponse) {
    for (var type in apiResponse[day]) {
      var getIndex = searchLabel(dataSchema, type)
      console.log(getIndex)
      if (!getIndex && getIndex !== 0) {
        console.log('entrou')
        var newDataset = {
          label: type,
          backgroundColor: default_colors[i],
          data: [(apiResponse[day][type])]
        }
        dataSchema.datasets.push(newDataset)
      } else {
        dataSchema.datasets[getIndex].data.push(apiResponse[day][type])
      }
      i += 1
    }
  }
  return dataSchema
}

function searchLabel (schema, label) {
  var index = 0
  var array_schema = schema.datasets
  console.log(array_schema.length)
  for (var i = 0; i < array_schema.length; i++) {
    if (array_schema[i].label === label) {
      return i
    }
  }
}