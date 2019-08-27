import React , { Component } from "react"
import axios from "axios"
import {message} from "antd"
import { status } from "./../../decorator/pub.js"
@status
class Signin extends Component{
	componentWillMount(){
		console.log(this)
		const hide = message.loading("请稍等···")
		axios.post("/loginStatus").then(res=>{
			console.log(res.data)
			if(res.data.state===1){
				hide()
				return
			}
			if(res.data.state===2){
				hide()
				message.warn("请重新登录",1)
				this.props.history.push("/signin")
				return
			}
			message.warn(res.data.message,1)
		})
	}
	render(){
		return(<div id="home">
			我是首页
		</div>)
	}
}
export default Signin;