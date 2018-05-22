import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  datasets: [
    {
      label: 'Feijão',
      backgroundColor: palette.primary,
      borderColor: palette.transparent,
      data: [
        Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100)
      ]
    },
    {
      label: 'Arroz',
      backgroundColor: palette.info,
      borderColor: palette.transparent,
      data: [
        Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100)
      ]
    },
    {
      label: 'Batata',
      backgroundColor: palette.warning,
      borderColor: palette.transparent,
      data: [
        Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100)
      ]
    }
  ]
}
