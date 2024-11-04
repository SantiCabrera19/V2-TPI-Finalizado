'use client'

import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

export function MapAside() {
  const mapRef = useRef(null)

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        version: 'weekly',
      })

      const { Map } = await loader.importLibrary('maps')

      // Replace these coordinates with the actual location of your spa
      const spaLocation = { lat: -27.451122, lng: -58.979050 }

      const mapOptions = {
        center: spaLocation,
        zoom: 15,
        styles: [
          {
            featureType: 'all',
            elementType: 'geometry',
            stylers: [{ color: '#fce4ec' }]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#c9b2ba' }]
          },
        ],
      }

      const map = new Map(mapRef.current, mapOptions)

      new google.maps.Marker({
        position: spaLocation,
        map: map,
        title: 'Oasis Sentirse Bien',
      })
    }

    initMap()
  }, [])

  return (
    (<aside
      className="bg-gradient-to-br from-pink-100 to-pink-200 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-pink-600 mb-4">¡Ven a vernos!</h2>
      <p className="text-gray-700 mb-4">Descubre la experiencia Oasis Sentirse Bien en persona. Te esperamos para mimarte y rejuvenecer tu cuerpo y mente.</p>
      <div ref={mapRef} className="w-full h-64 rounded-md overflow-hidden shadow-md" />
      <p className="mt-4 text-sm text-gray-600">French 414 3500 Resistencia Chaco</p>
    </aside>)
  );
}