'use strict'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { CookiesProvider } from 'react-cookie'

class MainComponent extends React.Component{
  render() {
    return (
      <BrowserRouter>
        <CookiesProvider>
          <App/>
        </CookiesProvider>
      </BrowserRouter>
    )
  }
}

export default MainComponent;