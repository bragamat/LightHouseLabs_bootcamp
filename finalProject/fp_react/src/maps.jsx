import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import axios from 'axios'

let arr = []

// let arr1 = 
// console.log(arr1)

const kkkk = axios
.get('http://localhost:8080/routes/api/all')
  .then(response=>{
    arr.push(response.data)
    // console.log(response.data)
  })


class Map extends Component {

  maping(){

  const vish = arr.map((item, index)=>{
        alert("inside")
        console.log(item, " item ", index)
        return (
                <div key={index}>
                  <h1>HELLO WORLD</h1>
                </div>
                )
    })
  }
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
        defaultZoom = { 13 }
      >
      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      {this.vish}

      </div>
   );
   }
};
export default Map;

