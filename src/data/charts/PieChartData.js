import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['Feijão', 'Arroz', 'Batata'],
  datasets: [{
    label: 'Population (millions)',
    backgroundColor: [palette.primary, palette.info, palette.warning],
    data: [2478, 5267, 734]
  }]
}
