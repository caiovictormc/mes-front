import axios from 'axios'
import {getAuthHeader} from '../auth.js'

const API_URL = 'http://localhost:8000/api/'
const CARDS_URL = API_URL + 'cards/'


export async function dataCards () {
  const resp = await axios
    .get(CARDS_URL, {headers: getAuthHeader()})
  return resp
}
