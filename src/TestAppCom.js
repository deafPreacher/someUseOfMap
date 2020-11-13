import React, {useEffect, useState} from 'react';
import leaflet from 'leaflet';

let map;

const TestAppCom = ({options}) => {

	const mapStyles = {
		height : '800px',
		width : 'auto'
	}
	const url = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}';
	
	useEffect(() => {
		map = leaflet.map('map');
		map.setView(options.position, 5);
		const res = leaflet.tileLayer(url, {
			id : 'mapbox/dark-v10',
			accessToken : options.accessToken
		}).addTo(map);
	}, []);

	useEffect(() => {
		leaflet.circle(options.position, {
			color : 'red',
			fillColor : 'red',
			fillOpacity : 0.5,
			radius : 50000
		}).addTo(map);

	})



	return (
		<div className='TestAppCom'>
			<div id='map' style={mapStyles}/>
		</div>
		);
}

export default TestAppCom;