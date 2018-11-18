import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const app = document.getElementById('root')

// class Layout extends React.Component {
// 	//Here is the right place to create functions
// 	getVal(val){
// 		return "William" + val	
// 	}
// 	constructor(){
// 		super();
// 		this.name = "Willy"
// 	}

// 	render(){
// 		const name = "Will"
// 				return(
// 			//<h1>It's {this.getVal(" The Morron")}!</h1>
// 			<h1>It's {this.name}!</h1>
// 			);
// 		}
// 	}



ReactDOM.render(
  <Layout />,
  app
);