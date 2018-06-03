
import {dataMonthly} from '../../services/api/info'
import {default_colors} from './colors.js'

import store from 'vuex-store'
import utils from 'services/utils'


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
      if (!getIndex && getIndex !== 0) {
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
  for (var i = 0; i < array_schema.length; i++) {
    if (array_schema[i].label === label) {
      return i
    }
  }
}

export function safeDaily (apiResponse) {
  var dataSchema = {
    labels: [
      '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00',
      '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
      '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
    ],
    datasets: []
  }
  var i = 0
  for (var type in apiResponse) {
    var newDataset = {}
    newDataset.label = type
    newDataset.data = apiResponse[type]
    newDataset.borderColor = default_colors[i]
    newDataset.backgroundColor = utils.hex2rgb(default_colors[i], 0.001).css
    dataSchema.datasets.push(newDataset)
    i += 1
  }
  return dataSchema
}


// import utils from 'services/utils'
// import store from 'vuex-store'

// let palette = store.getters.palette

// export default {
//   labels: [
//     '00:00', '01:00', '02:00', '03:00',
//     '04:00', '05:00', '06:00', '07:00',
//     '08:00', '09:00', '10:00', '11:00',
//     '12:00', '13:00', '14:00', '15:00',
//     '16:00', '17:00', '18:00', '19:00',
//     '20:00', '21:00', '22:00', '23:00'
//   ],
//   datasets: [
//     {
//       label: 'Feijão',
//       backgroundColor: utils.hex2rgb(palette.primary, 0.1).css,
//       borderColor: utils.hex2rgb(palette.primary).css,
//       data: [
//         40, 39, 10, 40, 39,
//         40, 39, 10, 40, 39,
//         40, 39, 10, 40, 39,
//         40, 39, 10, 40, 39,
//         40, 39, 10, 40
//       ]
//     },
//   ],
// }
