import React, { Component } from 'react';
import {HashRouter} from "react-router-dom"
import RouteIndex from "./routers/index"
import './App.css';
import { connect } from "react-redux"

class App extends Component {
	constructor(props){
		super(props)
		console.log(this.props)
	}
	componentDidMount(){
		
	}
  render() {
    return (<HashRouter>
			<button onClick={()=>{
				this.props.close()
			}}>点击</button>
        <RouteIndex/>
    </HashRouter>);
  }
}
const asyncFn = ()=>(dispatch,getState)=>{
	console.log(1)
	new Promise(res=>{
		console.log(2)
		setTimeout(res,1000)
	}).then(()=>{
		console.log(3)
		dispatch({type:"CLOSE"})
	})
}
const mapStateToProps = (state,ownProps) =>{
	return{
		init:state.init,
		loading:state.data
	}
}
const mapDispatchToProps = (dispatch,ownProps) =>{
	return{
		open:()=>{
			dispatch({type:"OPEN"})
		},
		close:()=>{
			dispatch(asyncFn())
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
