import React from 'react';
import Header from "./header";
import Footer from "./footer"

export default class Layout extends React.Component{
	constructor(){
		super();
		this.state = {name: "Will"};
	}
	render(){
		setTimeout(() => {
			this.setState({name:"Bobby"}) //updates state
		},100)
		// var list = [<Header />,
		// 		<Header />,
		// 		<Header />
		// 		];
		//this.state === nulll //by default
		return(
			<div>
				{this.state.name}
				<Header />
				<Footer />
			</div>
		);	
	}
}