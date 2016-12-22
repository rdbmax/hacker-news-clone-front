import React from 'react'
import { Link } from 'react-router'

import s from './header.scss'

const Header = () => {
  return (
    <div className='header'>
      <Link to='/' className={ s.headerLinks }>
        <h1 className='title'>Hacker News Clone</h1>
      </Link>
      <Link to='/popular' className={ s.headerLinks }>Popular</Link>
      <Link to='/recent' className={ s.headerLinks }>Recent</Link>
      <Link to='/submit' className={ s.headerLinks }>Submit</Link>
    </div>
  )
}

export default Header
