export default function (context) {
  context.$axios.onRequest((config) => {
    config.baseURL = context.app.$config.api
    config.headers.common.Authorization = `SENG ${context.$cookies.get('token')}`
  })

  // context.$axios.onError((error) => {
    // Sending the toast messages.
    // if (error.response.status !== 401) context.$toast.error(error)
    //  return Promise.resolve(false)
    // return false
  // })
}