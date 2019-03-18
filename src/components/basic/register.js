import React , { Component } from "react"
import "./register.scss"


export default class Register extends Component{
	goSignin(){
		this.props.history.push("/signin")
	}
	render(){
		return(<div id="register">
				<div className="register">
					<span></span>
					<p className="p1">注册</p>
					<input className="tel" type="tel" maxLength="11" placeholder="请输入正确的手机号码"/>
					<div className="message">
						<input className="text" type="text" maxLength="4" placeholder="请输入密保字符串"/>
						<span className="tips">查看</span>
					</div>
					<input className="passwordOne" type="password" placeholder="请输入密码"/>
					<input className="passwordTwo" type="password" placeholder="请再次输入密码"/>
					<button className="btn" >确认注册</button>
					<p className="p3">已有账号，立即<span onClick={this.goSignin.bind(this)}>登录</span></p>
				</div>
    </div>)
	}
}