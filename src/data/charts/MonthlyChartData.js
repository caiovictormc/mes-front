import store from 'vuex-store'
import { dataMonthly, nodataMonthly } from '../../services/api/info'


export class MonthlyChart {
    constructor() {
        this.fetchDataMonthly()
        let pallet = store.getters.pallet
        this.dataLabels = this.fetchDataMonthly()
        this.datasets = [{
            label: 'Population (millions)',
            data: [2478, 5267, 734]
        }]
        this.data = {
            labels: this.dataLabels,
            datasets: this.datasets,
        }
    }

    fetchDataMonthly() {
        rsp = dataMonthly();
        return Object.keys(rsp.data)

    }

    // fetchDataMonthly() {
    //     dataMonthly()
    //         .then(rsp => {
    //             this.dataLabels = Object.keys(rsp.data)
    //             console.log('ei puto')
    //             console.info(this.dataLabels)
    //     })  
    //     return this.dataLabels
    // }

    get getData() {
        return this.data
    }
}
/* {
  labels: dataLabels,
  datasets: [{
    label: 'Population (millions)',
    backgroundColor: [palette.primary, palette.info, palette.warning],
    data: [2478, 5267, 734]
  }]
} */
