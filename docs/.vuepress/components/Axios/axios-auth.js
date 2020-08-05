import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://vue-axios-8cb49.firebaseio.com/employees.json'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance
