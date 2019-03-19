import React , { Component } from "react"
import { message } from 'antd';
import "./register.scss"
import axios from "axios"

export default class Register extends Component{
	constructor(props){
		super(props)
		this.state = {
			name:"",
			SecretProtection:"",
			password:"",
			surepassword:"",
		}
	}
	goSignin(){
		this.props.history.push("/signin")
	}
	sure(){
		const {name,SecretProtection,password,surepassword} = this.state;
		if(!name){
			return message.warn("请输入用户名",1);
		}
		if(!SecretProtection){
			return message.warn("请输入密保字符串",1);
		}
		if(!password){
			return message.warn("请输入密码",1);
		}
		if(!surepassword){
			return message.warn("请确认密码",1);
		}
		if(password!==surepassword){
			return message.warn("两次密码必须相同",1);
		}
		const hide = message.loading("请稍等···")
		const sendData = {name,SecretProtection,password}
		axios.post("/register",sendData).then((res)=>{
			console.log(res)
			hide()
		})
	}
	render(){
		return(<div id="register">
				<div className="register">
					<p className="p1">注册</p>
					<input className="tel" type="text" maxLength="11" placeholder="请输入用户名" value={this.state.name} onChange={(e)=>{
						this.setState({name:e.target.value})
					}}/>
					<div className="message">
						<input className="text" type="text" value={this.state.SecretProtection} maxLength="64" placeholder="请输入密保字符串" onChange={(e)=>{
							this.setState({SecretProtection:e.target.value})
						}}/>
						<span className="tips">查看</span>
					</div>
					<input className="passwordOne" type="password"  maxLength="24" value={this.state.password} placeholder="请输入密码" onChange={(e)=>{
						this.setState({password:e.target.value})
					}}/>
					<input className="passwordTwo" type="password" maxLength="24"  value={this.state.surepassword} placeholder="请再次输入密码" onChange={(e)=>{
						this.setState({surepassword:e.target.value})
					}}/>
					<button className="btn" onClick={this.sure.bind(this)}>确认注册</button>
					<p className="p3">已有账号，立即<span onClick={this.goSignin.bind(this)}>登录</span></p>
				</div>
    </div>)
	}
}