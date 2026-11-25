import {
  Map,
  NavigationControl,
  FullscreenControl,
} from 'react-map-gl/maplibre';
import { useRef } from 'react';

export default function IssMap() {
  const mapRef = useRef(null);

  return (
    <section className='mt-8 min-[600px]:mt-10' aria-labelledby='map-heading'>
      <h2
        id='map-heading'
        className='mb-4 flex items-center justify-center gap-3 text-xl sm:text-2xl font-bold text-(--text-primary)'
      >
        <span className=' dot h-2 w-2 rounded-full bg-(--accent-success)'></span>
        ISS Live Location
      </h2>
      <div className='rounded-xl overflow-hidden'>
        <Map
          ref={mapRef}
          initialViewState={{
            longitude: 0,
            latitude: 50,
            zoom: 2,
          }}
          onLoad={() => {
            const map = mapRef.current?.getMap();
            if (!map) return;

            // Map background
            map.setPaintProperty('background', 'background-color', '#0B132B');

            // Oceans, seas and lakes
            map.setPaintProperty('water', 'fill-color', '#1C2541');

            // General land areas
            map.setPaintProperty('landuse', 'fill-color', '#17243A');

            // Residential areas
            map.setPaintProperty(
              'landuse_residential',
              'fill-color',
              '#1A2940',
            );

            // National parks
            map.setPaintProperty('park_national_park', 'fill-color', '#193B3B');

            // Nature reserves
            map.setPaintProperty(
              'park_nature_reserve',
              'fill-color',
              '#21443F',
            );

            // Minor roads
            map.setPaintProperty('road_minor_fill', 'line-color', '#826F3F');

            // Main roads
            map.setPaintProperty(
              'road_pri_fill_noramp',
              'line-color',
              '#B69B32',
            );

            // Outer country borders
            map.setPaintProperty(
              'boundary_country_outline',
              'line-color',
              '#FFD166',
            );

            // Internal country borders
            map.setPaintProperty(
              'boundary_country_inner',
              'line-color',
              '#D4A943',
            );
          }}
          style={{ width: '100%', height: '500px' }}
          mapStyle={`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json?key=${import.meta.env.VITE_CARTO_API_KEY}`}
        >
          <NavigationControl position='top-right' />
          <FullscreenControl position='top-right' />
        </Map>
      </div>
    </section>
  );
}
