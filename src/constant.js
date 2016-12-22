const API_URL = (process.env.NODE_ENV !== 'production') ?
  'http://localhost:3000/graphql' :
  'http://your-back-api.com'

export { API_URL }
