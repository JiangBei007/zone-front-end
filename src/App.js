import React, { Component } from 'react';
import {HashRouter} from "react-router-dom"
import RouteIndex from "./routers/index"
import './App.css';
import axios from "axios"

class App extends Component {
	componentDidMount(){
		axios.get("/signin").then(data=>{
			console.log(data)
		})
	}
  render() {
    return (<HashRouter>
      <div className="App">
        <RouteIndex/>
      </div>
    </HashRouter>);
  }
}

export default App;
