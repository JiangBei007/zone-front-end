import axios from "axios"
import {message} from "antd"
export function status(target){
	target.prototype.con = function(){
		/* const hide = message.loading("请稍等···")
		axios.post("/loginStatus").then(res=>{
			console.log(res.data)
			if(res.data.state===1){
				hide()
				return
			}
			if(res.data.state===2){
				hide()
				message.warn("请重新登录",1)
				target.props.history.push("/signin")
				return
			}
			message.warn(res.data.message,1)
		}) */
	}()
}