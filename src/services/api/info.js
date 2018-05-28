import axios from 'axios'
import {getAuthHeader} from '../auth.js'

const API_URL = 'http://localhost:8000/api/'
const CARDS_URL = API_URL + 'cards/'
const MONTHLY_URL = API_URL + 'monthly/'


export async function dataCards () {
  const resp = await axios
    .get(CARDS_URL, {headers: getAuthHeader()})
  return resp
}


export async function dataMonthly () {
  const resp = await axios
    .get(MONTHLY_URL, {headers: getAuthHeader()})
  return resp
}


export function nodataMonthly () {
  let rsp = {}
  axios.get(MONTHLY_URL, {headers: getAuthHeader()})
    .then(function (response) {
      rsp = response;
    })
    .catch(function (error) {
      rsp = error;
    });
  return rsp

}
