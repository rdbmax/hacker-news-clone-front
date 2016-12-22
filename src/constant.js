console.log(process.env.NODE_ENV)

const API_URL = (process.env.NODE_ENV !== 'prod') ?
  'http://localhost:3000/graphql' :
  'http://your-back-api.com'

export { API_URL }
