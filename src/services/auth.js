import axios from 'axios'
// import router from '../router/index.js'

const API_URL = 'http://mesadmin.canionlabs.io/api/'
const LOGIN_URL = API_URL + 'api/auth/token/'
const REFRESH_URL = API_URL + 'api/auth/token-refresh/'
const CHECK_URL = API_URL + 'api/auth/token-verify/'


export var user = {
  authenticated: false
}

export async function tryLogin (username, password) {
  const resp = await axios
    .post(LOGIN_URL, {
      username: username, password: password})
  localStorage.setItem('id_token', resp.data.token)
  user.authenticated = true
  return true
}

export function getToken () {
  return localStorage.getItem('id_token')
}

export async function refreshToken () {
  const resp = await axios
    .post(REFRESH_URL, {token: getToken()})
  localStorage.setItem('id_token', resp.data.token)
}

export function getAuthHeader () {
  return {
    'Authorization': 'JWT ' + localStorage.getItem('id_token')
  }
}

export async function checkToken () {
  const resp = await axios
    .post(CHECK_URL, {token: getToken()})
  return resp
}

export async function logout () {
  user.authenticated = false
  await localStorage.removeItem('id_token')
}

