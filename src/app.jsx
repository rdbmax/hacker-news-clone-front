import React, { Component } from 'react'

import Header from './components/header'
import Home from './components/home'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        { this.props.children || <Home /> }
      </div>
    )
  }
}

export default App
