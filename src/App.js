import React, { Component } from 'react';
import {HashRouter} from "react-router-dom"
import RouteIndex from "./routers/index"
import './App.css';

class App extends Component {
	componentDidMount(){
		
	}
  render() {
    return (<HashRouter>
        <RouteIndex/>
    </HashRouter>);
  }
}

export default App;
