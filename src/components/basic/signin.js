import React, { Component } from 'react'
import './signin.scss'
import axios from 'axios'

export default class Signin extends Component {
  componentDidMount() {
    axios.post('/loginStatus').then(res => {
      console.log(res)
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
            type="tel"
            maxLength="11"
            placeholder="请输入手机号码"
          />
          <input
            className="pass"
            type="password"
            placeholder="请输入您的密码"
          />
          <button>登录</button>
          <p className="p2" onClick={this.register.bind(this)}>
            立即注册
          </p>
        </div>
      </div>
    )
  }
}
