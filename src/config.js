// require('dotenv').config()
// store token in env variable !
const token = 'pk.eyJ1Ijoic2FtaXIyMiIsImEiOiJja2hlcG1ldDgwYWU2MnpsdTZ5enJsZHkxIn0.Ag_ofIJzSbUjtB6gfLn-bw';

const mapOptions = {
  position : [20.59, 78.96],
  zoom : 5,
  style : {
    height : '100vh',
    width : 'auto'
  }
}
const tileOptions = {
  url : 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
  id : 'mapbox/streets-v11',
  accessToken : token
}

export default {mapOptions, tileOptions};