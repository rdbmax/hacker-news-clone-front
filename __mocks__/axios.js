import { isFunction } from 'lodash'

const axios = {}

axios.request = ({ method = 'POST', url }) => new Promise((resolve, reject) => {
  // check if we have registred a custom response
  const response = axios.responses.find((resp) => url.includes(resp.url))

  if (response) {
    axios.responses.splice(axios.responses.indexOf(response), 1)

    // use with `jest.fn()` to check if request has been done
    // if (isFunction(response.callback)) {
    //   response.callback()
    // }

    if (response.code > 400) {
      return reject({ response })
    }

    return resolve(response)
  }

  console.error(`
    [ ${method} ] ~~~> ${url}
    Please call \`axios.registerResponse()\` before faking XHR into tests
  `)

  return reject()
})

axios.registerResponse = ({ url, data, callback, code = 200 }) => {
  axios.responses.push({ url, data, code, callback })
}

axios.responses = []

export default axios
