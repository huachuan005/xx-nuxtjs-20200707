export default function ({ app: { $axios } }) {
  // $axios.defaults.baseURL = 'http://127.0.0.1:8000/'
  $axios.interceptors.request.use(config => {
    console.log("config", config)
    return config
  })
  $axios.interceptors.response.use(response => {
    console.log("response", response)
    console.log("responseData", response.data)
    console.log("/^[4|5]/.test(response.status)", /^[4|5]/.test(response.status))
    if (/^[4|5]/.test(response.status)) {
      return Promise.reject(response.statusText)
    }
    return response.data
  })
}
