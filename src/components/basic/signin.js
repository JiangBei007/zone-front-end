import React, { Component } from 'react'
import './signin.scss'
import { message } from 'antd'
import axios from 'axios'

export default class Signin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: ''
    }
  }
  toToHome() {
    const { name, password } = this.state
    if (!name) {
      return message.warn('请输入用户名', 1)
    }
    if (!password) {
      return message.warn('请输入密码', 1)
    }
    axios.post('/signin', { name, password }).then(res => {
      if (res.data.state !== 1) {
        message.warn(res.data.message, 1)
      } else {
        message.success('登录成功，跳转首页···', 1)
        setTimeout(() => {
          this.props.history.push('/home')
        }, 500)
      }
    })
  }
  register() {
    this.props.history.push('/register')
  }
  render() {
    return (
      <div id="signin">
        <div className="signin">
          <p className="p1">登录</p>
          <input
            className="tel"
            type="text"
            maxLength="11"
            placeholder="请输入用户名"
            value={this.state.name}
            onChange={e => {
              this.setState({ name: e.target.value })
            }}
          />
          <input
            className="pass"
            type="password"
            placeholder="请输入您的密码"
            value={this.state.password}
            onChange={e => {
              this.setState({ password: e.target.value })
            }}
          />
          <button onClick={this.toToHome.bind(this)}>登录</button>
          <p className="p2">
            <span onClick={this.register.bind(this)}>立即注册</span>
          </p>
        </div>
      </div>
    )
  }
}
