import axios from 'axios'
import {getAuthHeader} from '../auth.js'

const API_URL = 'http://localhost:8000/api/'
const CARDS_URL = API_URL + 'info/cards/'
const MONTHLY_URL = API_URL + 'info/monthly/'
const WEEKLY_URL = API_URL + 'info/weekly/'

export async function dataCards () {
  const resp = await axios
    .get(CARDS_URL, {headers: getAuthHeader()})
  return resp
}

export async function getMonthly () {
  const resp = await axios
    .get(MONTHLY_URL, {headers: getAuthHeader()})
  return resp
}

export async function getWeekly () {
  const resp = await axios
    .get(WEEKLY_URL, {headers: getAuthHeader()})
  return resp
}