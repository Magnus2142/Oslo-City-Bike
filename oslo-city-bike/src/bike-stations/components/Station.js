import React from 'react'
import styled from 'styled-components'

function Station(props) {
    return (
        <StationBody>
            <h3>{props.stationName}</h3>
            <div className="station-status-container">
                <p>Bikes left: {props.bikesLeft}</p>
                <p>Free docks: {props.freeDocks}</p>
            </div>
        </StationBody>
    )
}

const StationBody = styled.div`
    
    width: 100%;
    height: 70px;
    color: white;
    display: flex;

    flex-flow: row;
    justify-content: space-between;
    align-items: center;

    border: solid 1px #FAF089;
    border-radius: 5px;
    margin: 15px 0;
    
    transition: background-color 0.5s;

    h3{
        padding: 0 10px;
    }

    .station-status-container{
        display: flex;
        flex-flow: row;
    }

    p{
        padding: 0 40px;
    }

    :hover{
        cursor: pointer;
        background-color: #283143;
    }

    
`

export default Station
