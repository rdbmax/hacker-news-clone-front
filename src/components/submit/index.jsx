import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { request } from 'axios'

import s from './submit.scss'
import { API_URL } from '../../constant'


class Submit extends Component {

  state = { error: null, loading: false }

  handleFormSubmit = (e) => {
    e.preventDefault()

    const { value: websiteUrl } = this.inputRef
    const re = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/

    if (re.test(websiteUrl)) {
      this.setState({ error: null, loading: true })

      request({
        url: API_URL,
        method: 'post',
        headers: { 'Content-Type': 'application/graphql' },
        data: `mutation { add(url: "${websiteUrl}") { url } }`
      })
      .then(() => setTimeout(() => browserHistory.push('/popular'), 2000))
      .catch((error) => this.setState({ error: error.toString(), loading: false }))
    } else {
      this.setState({ error: 'Please enter a valid URL' })
    }
  }

  render() {
    const { error, loading } = this.state

    return (
      <div>
        { error && <p className={ s.errorMessage }>{ error }</p> }

        { !loading &&
          <form onSubmit={ this.handleFormSubmit }>
            <label htmlFor='website'>Enter website URL</label>
            <input ref={ (ref) => { this.inputRef = ref } } type='text' id='website' />
            <button onClick={ this.handleFormSubmit }>Send</button>
          </form> }

        { loading &&
          <p>You just sent a new Link, you will be redirect to the home page</p> }
      </div>
    )
  }
}

export default Submit
