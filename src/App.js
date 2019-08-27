import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'
import RouteIndex from './routers/index'
import './App.css'
import { Spin } from 'antd'
class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <HashRouter>
        <Spin tip="Loading...">
          <RouteIndex />
        </Spin>
      </HashRouter>
    )
  }
}

export default App
