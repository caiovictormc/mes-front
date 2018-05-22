import utils from 'services/utils'
import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: [
    '00:00', '00:00', '00:00', '00:00',
    '00:00', '00:00', '00:00', '00:00',
    '00:00', '00:00', '00:00', '00:00',
    '00:00', '00:00', '00:00', '00:00',
    '00:00', '00:00', '00:00', '00:00',
    '00:00', '00:00', '00:00', '00:00'
  ],
  datasets: [
    {
      label: 'Feijão',
      backgroundColor: utils.hex2rgb(palette.primary, 0.1).css,
      borderColor: utils.hex2rgb(palette.primary).css,
      data: [
        40, 39, 10, 40, 39,
        40, 39, 10, 40, 39,
        40, 39, 10, 40, 39,
        40, 39, 10, 40, 39,
        40, 39, 10, 40
      ]
    },
    {
      label: 'Arroz',
      backgroundColor: utils.hex2rgb(palette.info, 0.1).css,
      borderColor: utils.hex2rgb(palette.info).css,
      data: [
        50, 20, 70, 30, 10,
        50, 20, 70, 30, 10,
        50, 20, 70, 30, 10,
        50, 20, 70, 30, 10,
        50, 20, 70, 30, 10,
        50, 20, 70, 30
      ]
    },
    {
      label: 'Batata',
      backgroundColor: utils.hex2rgb(palette.warning, 0.1).css,
      borderColor: utils.hex2rgb(palette.warning).css,
      data: [
        10, 60, 80, 30, 10,
        0, 0, 20, 5, 12,
        5, 2, 7, 35, 10,
        5, 2, 7, 20, 100,
        5, 2, 7, 3, 120,
        5, 2, 0, 0
      ]
    }
  ],
}
