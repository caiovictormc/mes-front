import axios from 'axios'

export async function tryLogin (username, password) {
  const resp = await axios
      .post('http://localhost:8000/api/auth/token/', {
        username: username,
        password: password
      })
  localStorage.setItem('id_token', resp.data.token)
  return true
}
