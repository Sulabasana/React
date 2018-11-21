import React from 'react';

import Title from './header/title'

export default class Header extends React.Component{
	render(){
		// console.log(this.props) //props is from layout2.js 
		return(
			<div>
				<Title title ={this.props.title}/>
			</div>	
		);	
	}
}