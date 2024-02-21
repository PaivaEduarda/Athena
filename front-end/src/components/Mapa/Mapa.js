import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './Mapa.css';
import axios from 'axios';

const urlAPI = "http://localhost:5015/api/Denuncia"

export default function Mapa(props) {
  const mapContainer = useRef(null);
  const [lng, setLng] = useState(-47.055788);
  const [lat, setLat] = useState(-22.902296);
  const [zoom, setZoom] = useState(props.getLocation==="true"? 13 : 12);
  const [markerCoordinates, setMarkerCoordinates] = useState(null)
  const [API_KEY] = useState('RfZ6FKDvmImokpkv5RaE')
  const [denuncias, setDenuncias] = useState([])

  function salvarDenuncia(){
    props.latitude(lat)
    props.longitude(lng)
  }

  useEffect(() => {
    if (props.getLocation === "false")
    {
      axios(urlAPI).then((resp) => {
        setDenuncias(resp.data);
      });
    }
  }, []);

  useEffect(() => {
    if (props.getLocation === "true")
      salvarDenuncia();
  }, [lng, lat]);

  useEffect(() => {
    maplibregl.accessToken = API_KEY;
  
    const mapa = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
      renderWorldCopies: true,
    });
  
    mapa.addControl(new maplibregl.NavigationControl(), 'top-right');
    if (props.getLocation === "true")
      mapa.addControl(new maplibregl.GeolocateControl(), 'top-right');
  
    if (props.getLocation === "true")
    {
      mapa.on('move', () => {
        const center = mapa.getCenter();
        setLng(() => center.lng);
        setLat(() => center.lat);
        setZoom(() => mapa.getZoom());
      });
    }
    else if (props.getLocation === "false")
    {
      denuncias.map((rel) => {
        const initialCoordinates = [parseFloat(rel.longitude), parseFloat(rel.latitude)];
        const marker = new maplibregl.Marker({ draggable: false });
    
        marker.on('dragend', () => {
          const newCoordinates = marker.getLngLat();
          setMarkerCoordinates([newCoordinates.lng, newCoordinates.lat]);
        });
        marker.setLngLat(initialCoordinates).addTo(mapa);
      });
    }
  
    return () => mapa.remove(); // Cleanup on component unmount
  }, [denuncias]);  

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className={props.getLocation=="true"? "mapa" : "mapaRelato"}/>
      {markerCoordinates && (
        <div className="marker-container">
          <div className="marker" />
        </div>
      )}
      <div className="maptiler-search-bar" />
    </div>
  );  
}