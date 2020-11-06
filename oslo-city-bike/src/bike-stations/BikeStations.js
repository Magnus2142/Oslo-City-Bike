import React, { useState } from 'react';
import "./BikeStations.css"

import Station from './components/Station'
import { useFetch } from "./useFetch.js";

    
function BikeStations() {

    const [stationInformation, infoLoading] = useFetch("https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json");
    const [stationStatus, statusLoading] = useFetch("https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json");

    const [searchTerm, setSearchTerm] = useState("");

    const editSearchTerm = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
        <div className="bike-station-body">
            <div className="header">
                <h2>Oslo City Bikes</h2>
            </div>
            <div className="container">
                <div className="search-container">
                    <h1>Find your station!</h1>
                    <input id="search" type="text" value={searchTerm} onChange={editSearchTerm} placeholder="Search..." />  
                </div>
                {(infoLoading || statusLoading) ? <div>Loading....</div> : 
                stationInformation.data.stations
                .sort((a, b) => a.name > b.name ? 1 : -1)
                .map((stationInfo, index) => {
                    if(stationInformation.data.stations[index].name.toLowerCase().includes(searchTerm)){
                        return <Station stationName={stationInfo.name} bikesLeft={stationStatus.data.stations[index].num_bikes_available} freeSpots={stationStatus.data.stations[index].num_docks_available} key={index}/>                        
                    }else{
                        return null;
                    }
                })}
            </div>            
        </div>
    )
}


export default BikeStations
