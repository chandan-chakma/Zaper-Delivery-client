import React, { useRef } from 'react';
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { useLoaderData } from 'react-router';
const Coverage = () => {
    const position = [22.7324, 92.2985];
    const serviceCenter = useLoaderData()
    console.log(serviceCenter);
    const mapRef = useRef(null)
    const handleSearch = (e) => {
        e.preventDefault();
        const location = e.target.search.value;
        // console.log(location)
        const district = serviceCenter.find(c => c.district.toLowerCase().includes(location.toLowerCase()))
        // console.log('districr',district)
        if (district) {
            const cord = [district.latitude, district.longitude];
            console.log(cord)
            mapRef.current.flyTo(cord,14)
            
        }
        

    }
    
    return (
        <div className='my-10'>
            <h1 className='text-2xl font-bold text-secondary'>We are avilable in 64 districts</h1>
            {/* search   */}
            <form className='my-4' onSubmit={handleSearch}>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" name='search' />
                </label>

            </form>

           

            <div className='border w-full h-[800px] '>
                <MapContainer ref={mapRef} center={position} zoom={8} scrollWheelZoom={false} className='h-[800px]'>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {
                        serviceCenter.map((service,index) =>
                            <Marker key={index} position={[service.latitude,service.longitude]}>
                                <Popup>
                                    {service.district}
                                    <p>Servier Area: {service.covered_area.join(' ,')}</p>
                                </Popup>
                            </Marker>
                        )
                    }
                   
                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;