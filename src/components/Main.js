'use strict'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

class MainComponent extends React.Component{
  render() {
    return (
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    )
  }
}

export default MainComponent;