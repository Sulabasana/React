import React from 'react';
import Header from "./header";
import Footer from "./footer"

export default class Layout extends React.Component{
	constructor(){
		super();
		this.state = {
			title: "Welcome",
		};
	}
	render(){
		setTimeout(() =>{
			this.setState({title: "Welcome Will!"})
		},2000)
		
		return(
			<div>
				<Header name ={this.state.title} />
				<Header title={"Other title"} />
				<Footer />
			</div>
		);	
	}
}