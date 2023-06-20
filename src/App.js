import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css'
import Map, { Marker } from 'react-map-gl'

function App() {
  const ll = [80.270186,13.083694]
  return (
    <div className="App">
      <Map
        mapboxAccessToken='pk.eyJ1Ijoic2FpaTE2IiwiYSI6ImNsajB6NDVtejBxbHQzbG9kcWJ3aXdrYzEifQ.5rMbLCxwzbFpj3SPVW31kA'
        style={{
          width:"500px",
          height:"500px",
          border:"2px solid red"
        }}
        initialViewState={{
          longitude:ll[0],
          latitude:ll[1]
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9" 
      >
        <Marker
          longitude={ll[0]}
          latitude={ll[1]}
        />
      </Map>
    </div>
  );
}

export default App;
