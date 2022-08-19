import axios from 'axios'

const BASE_URL = 'http://localhost:8000/api/'
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjUxNzM0N2M1Zjc5YzRjODc5MTdjZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDU4NTg4NSwiZXhwIjoxNjYwNjcyMjg1fQ.5LCo058PJB1PjmNZU3FnwgyjitR1_xn62_USyqrAmig'

export const publicRequest = axios.create({ baseURL: BASE_URL })

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
})
