import React, {useState, useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import config from './config.js'
import dataServices from './dataServices.js';

const App = () => {
  
  const [coordinateData, setCoordianteData] = useState([]);
  const [countryData, setCountryData] = useState(null);
  const [provinceData, setProvinceData] = useState(null);

  useEffect(() => {
    dataServices
      .getProvinceData()
      .then(data => {
        setCoordianteData(data);
      });  
  })

  const mapper = province => {

  const {latitude, longitude} = province.coordinates;
  return (
      <Marker position={[latitude, longitude]}>
        <Popup>
          <b>{province.province}</b>
        </Popup>
      </Marker>
    );
  }

  return (
    <div className='App'>

      <MapContainer 
        center={config.mapOptions.position} 
        zoom={config.mapOptions.zoom}
        style={config.mapOptions.style}
      >

        <TileLayer 
          url={config.tileOptions.url}
          id={config.tileOptions.id}
          accessToken={config.tileOptions.accessToken}
          minZoom={config.mapOptions.zoom}
          maxZoom={config.mapOptions.zoom+2}
        />

        {coordinateData.map(mapper)}

      </MapContainer>

    </div>

    );  
}

export default App;
