import React, { Component } from 'react'
import StorePicker from './StorePicker'
import Header from './Header.js'
import Inventory from './Inventory.js'
import Order from './Order.js'

class App extends Component {

  render () {
    return <div>
      <StorePicker />
      <div className='catch-of-the-day'>
        <Header tagline='Fresh Seafood Market' />
      </div>
      <Order />
      <Inventory />
    </div>
  }
}

export default App
