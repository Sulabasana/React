import React from 'react';
import Header from "./header";
import Footer from "./footer"

export default class Layout extends React.Component{
	
	render(){
		// var list = [<Header />,
		// 		<Header />,
		// 		<Header />
		// 		];
		return(
			<div>
				<Header />
				<Footer />
			</div>
		);	
	}
}