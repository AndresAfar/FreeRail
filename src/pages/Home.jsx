import React from 'react'
import {SpotCard} from '../components/SpotCard'
import { SpotsList } from '../components/SpotsList'
import data from '../components/spots.json'

import "leaflet/dist/leaflet.css"

import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker, Popup } from 'react-leaflet'

export const Home = () => {

  const markers=[
    {
      geocode: [4.754731743966792, -74.11157140094889],
      popUp: "SkatePark Fontanar del Rio"
    }
  ]


  return (
    <div className='container p-4'>
        <div className='content-map pt-10 h-full w-full'>
            <div className='map text-white bg-slate-600 border-2 rounded-md h-[530px]'>
              <MapContainer center={[4.662176276366342, -74.0888006455318]} zoom={6}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers.map(marker =>(
                  <Marker position={marker.geocode}>
                    <Popup>
                      {marker.popUp}
                    </Popup>
                  </Marker>
                ))
                }
              </MapContainer>
            </div>
        </div>
        <div className='content-spots h-full w-full mt-10'>
            <span className='text-white text-3xl my-2'>Spots</span>
            <SpotCard>
              {data.map(spot=>
                <SpotsList name={spot.nombre} description={spot.descripcion}/>
                )}
            </SpotCard>
        </div>
    </div>
  )
}
