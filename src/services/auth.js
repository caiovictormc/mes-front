import axios from 'axios'
// import router from '../router/index.js'

const API_URL = 'http://mesadmin.canionlabs.io/api/'
const LOGIN_URL = API_URL + 'auth/token/'
const REFRESH_URL = API_URL + 'auth/token-refresh/'
const CHECK_URL = API_URL + 'auth/token-verify/'


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
  if (localStorage.getItem('id_token')) {
    const resp = await axios
      .post(REFRESH_URL, {token: getToken()})
      .then(function (response) {localStorage.setItem('id_token', response.data.token)})
      .catch(function (error) {logout()})    
  }
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

