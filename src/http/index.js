import axios from 'axios'

export const GET = (url, config) => {
  const params = config.params || {}
  const timeout = config.timeout || 60000
  return new Promise((res, rej) => {
    axios
      .get(url, {
        params,
        timeout
      })
      .then(response => {
        const datatotal = response.data
        const { state, data } = datatotal
        if (state === 1) {
          res(data)
        }
      })
      .catch(err => {
        const str = err.toString()
        rej(str)
      })
  })
}

export const POST = (url, config) => {
    const data = config.data || {}
    const timeout = config.timeout || 60000
    return new Promise((res, rej) => {
      axios
        .post(url,data {
          timeout
        })
        .then(response => {
            const datatotal = response.data
            const { state, data } = datatotal
            if (state === 1) {
              res(data)
            }
          })
          .catch(err => {
            const str = err.toString()
            rej(str)
          })
    })
  }