import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Layout extends React.Component {
	render(){
		return(
			<h1>It works!</h1>
			);
		}
	}



ReactDOM.render(
  <Layout />,
  document.getElementById('root')
);