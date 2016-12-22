import { defer } from 'lodash'
import React from 'react'
import { shallow } from 'enzyme'
import Home from '../home'
import sleep from '../../utils/sleep'
import axios from 'axios'

const response = `
{
  "data": {
    "recent": [
      {
        "_id": "585bca090ea9824c14b64f5e",
        "name": "Google",
        "url": "http://google.com",
        "vote": 0,
        "created_at": "2016-12-22"
      },
      {
        "_id": "585bc79540c123479fc02f89",
        "name": "Google",
        "url": "http://google.com",
        "vote": -1,
        "created_at": "2016-12-22"
      },
      {
        "_id": "585aaceb3fabb9312232dc88",
        "name": "Mongoose Schemas v4.7.4",
        "url": "http://mongoosejs.com/docs/guide.html",
        "vote": 3,
        "created_at": "2016-12-21"
      },
      {
        "_id": "585aac1ba2fe36310bdc2fb8",
        "name": "Réinvention de la gestion des informations  | MongoDB",
        "url": "https://www.mongodb.com/fr",
        "vote": 3,
        "created_at": "2016-12-21"
      },
      {
        "_id": "585aaacc9031be309afdc87c",
        "name": "Twitter. Ce qu'il se passe.",
        "url": "https://twitter.com/",
        "vote": 1,
        "created_at": "2016-12-21"
      }
    ]
  }
}
`

it('should display links', async () => {
  axios.registerResponse({
    url: 'http://localhost:3000/graphql',
    data: JSON.parse(response)
  })

  const Component = shallow(<Home type='recent' />)

  await sleep()

  expect(Component.find('.homeclass').children().length).toBe(5)
})
