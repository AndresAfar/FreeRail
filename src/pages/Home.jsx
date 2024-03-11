import React from 'react'
import {SpotCard} from '../components/SpotCard'
import { SpotsList } from '../components/SpotsList'
import data from '../components/spots.json'

import "leaflet/dist/leaflet.css"

import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'

export const Home = () => {

  const markers=[
    {
      geocode: [4.754731743966792, -74.11157140094889],
      popUp: "SkatePark Fontanar del Rio"
    },
    {
      geocode: [4.734866165612362, -74.10723110291629],
      popUp: "SkatePark Parque Piloto"
    }
  ]


  return (
    <div className='container p-4'>
        <div className='content-map pt-5 h-full w-full'>
            <div className='map text-white bg-slate-600 border-2 rounded-md h-[530px]'>
              <MapContainer center={[4.662176276366342, -74.0888006455318]} zoom={11}>
                <TileLayer
                  attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.{ext}'
                  ext='png'
                />
                <MarkerClusterGroup>

                {markers.map(marker =>(
                  <Marker position={marker.geocode}>
                    <Popup>
                      {marker.popUp}
                    </Popup>
                  </Marker>
                ))
              }
              </MarkerClusterGroup>
              </MapContainer>
            </div>
        </div>
        <div className='content-bts w-full  my-8 grid justify-items-end'>
          <button className=' text-white bg-[#293038] md:text-base p-3 rounded-lg'>Nuevo Spot</button>
        </div>
        <div className='content-spots h-full w-full mt-10 '>
            <span className='text-white text-3xl my-2'>Spots</span>
            <SpotCard>
              {data.map(spot=>
                <SpotsList name={spot.nombre} description={spot.descripcion} img={spot.img}/>
                )}
            </SpotCard>
        </div>
    </div>
  )
}
