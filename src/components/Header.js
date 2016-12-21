import React, { Component } from 'react'

class Header extends Component {

  render () {
    return <div>
      <header className='top'>
        <h1>
          Catch
          <span className='of'>of</span>
          <span className='the'>the</span>
          Day
        </h1>
        <h3 className='tagline'><span>{this.props.tagline}</span></h3>
      </header>
    </div>
  }
}

export default Header
