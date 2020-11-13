import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';


const App = ({options}) => {
  const position = [options.x, options.y];
  const zoom = 3;
  const style = {
    height : '800px',
    width : 'auto'
  }
  const url = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'

  return (
    <MapContainer center={position} zoom={zoom} style={style}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={url}
          id='mapbox/dark-v10'
          accessToken={options.accessToken}
        />
        <Marker 
          position={position}
          opacity={0.5}
        >
          <Popup
            onOpen={() => console.log('show the data here.')}
            onClose={() => console.log('close the data tab here.')}
          >
            cases : 0
          </Popup>
        </Marker>
      </MapContainer>
  );
}

export default App;
