import utils from 'services/utils'
import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: [
    '00:00', '01:00', '02:00', '03:00',
    '04:00', '05:00', '06:00', '07:00',
    '08:00', '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00',
    '16:00', '17:00', '18:00', '19:00',
    '20:00', '21:00', '22:00', '23:00'
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
