import React , { Component } from "react"
import {Route} from "react-router-dom"
import Signin from "./../components/basic/signin.js"



export default class RouteIndex extends Component{
	render(){
		return(
		<div>
			<Route path="/signin" component={Signin}></Route>
		</div>
		)
	}
}