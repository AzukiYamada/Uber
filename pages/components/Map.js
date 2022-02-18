import React from 'react'
import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiYXp1a2l5YW1hZGEiLCJhIjoiY2t6Yzh4cm9rMmp4NjJucHZuZjl6NGo2cCJ9.JLbhcNhvlfrBN2hQ3UHqbA';

const map = (props) => {
    console.log(props)

    useEffect(() => { 
        const map = new mapboxgl.Map({
            container: "map",
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [139.7673068, 35.6809591],
            zoom: 13
    });

        if(props.pickupCoordinates){
            addToMap(map, props.pickupCoordinates)
        }
        if(props.dropoffCoordinates){
            addToMap(map, props.dropoffCoordinates)
        }
        if(props.pickupCoordinates && props.dropoffCoordinates){
            map.fitBounds([
                props.pickupCoordinates,
                props.dropoffCoordinates
            ],{
                padding: 60
            })
        }
    },[props.pickupCoordinates, props.dropoffCoordinates])

    const addToMap = (map, coordinates) => {
            const marker1 = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);
    }

    return <Wrapper id='map'></Wrapper>
};

export default map;

const Wrapper = tw.div`
    flex-1
    h-1/2
`
