import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TestAppCom from './TestAppCom';

const options = {
	position : [20.59, 78.96],
	accessToken : 'pk.eyJ1Ijoic2FtaXIyMiIsImEiOiJja2hlcG1ldDgwYWU2MnpsdTZ5enJsZHkxIn0.Ag_ofIJzSbUjtB6gfLn-bw'
}

ReactDOM.render(<TestAppCom options={options}/>, document.getElementById('root'));