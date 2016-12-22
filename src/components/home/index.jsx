import React, { Component } from 'react'
import axios from 'axios'
import { browserHistory } from 'react-router'

import s from './home.scss'
import { API_URL } from '../../constant'


class Home extends Component {

  state = { links: [] }

  componentWillMount() {
    const { type } = this.props

    if (!type) {
      browserHistory.replace('/popular')
    } else {
      this.getLinks(type)
    }
  }

  getLinks = (type) => {
    axios.request({
      url: API_URL,
      method: 'post',
      headers: { 'Content-Type': 'application/graphql' },
      data: `query { ${type} { _id, name, url, vote, created_at } }`
    })
    .then(({ data: { data } }) => this.setState({ links: data[type] }))
    .catch((error) => console.log('error', error))
  }

  handleVote = (type, id) => () => {
    const { type: linkType } = this.props

    axios.request({
      url: API_URL,
      method: 'post',
      headers: { 'Content-Type': 'application/graphql' },
      data: `mutation { ${type}vote(_id: "${id}") { _id, url, name, vote } }`
    })
    .then(() => this.getLinks(linkType))
    .catch((error) => console.log('error', error))
  }

  displayLink = ({ name, url, _id }, idx) =>
    (<div key={ idx } className={ s.linkContainer }>
      <button onClick={ this.handleVote('down', _id) }>&#8595;</button>
      <button onClick={ this.handleVote('up', _id) }>&#8593;</button>
      <a href={ url } className={ s.link } rel='noopener noreferrer' target='_blank'>
        { name }
      </a>
    </div>)

  render() {
    const { links } = this.state
    return (<div className='homeclass'>{ links.map(this.displayLink) }</div>)
  }
}

export default Home
