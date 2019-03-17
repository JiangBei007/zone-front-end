import React , { Component } from "react"
import "./signin.scss"


export default class Signin extends Component{
	render(){
		return(<div id="register">
				<h2>快抢单管理后台</h2>
				<div className="register">
					<span></span>
					<p className="p1">注册</p>
					<input className="tel" type="tel" maxLength="11" placeholder="请输入正确的手机号码"/>
					<div className="message">
						<input className="text" type="text" maxLength="4" placeholder="请输入短信验证码"/>
						<button>s后重新获取</button>
					</div>
					<input className="passwordOne" type="password" placeholder="请输入密码"/>
					<input className="passwordTwo" type="password" placeholder="请再次输入密码"/>
					<p className="p2">注册即同意</p>
					<button className="btn" >确认注册</button>
					<p className="p3">已有账号，立即</p>
				</div>
    </div>)
	}
}