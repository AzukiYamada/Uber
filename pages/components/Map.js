import React from 'react'
import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiYXp1a2l5YW1hZGEiLCJhIjoiY2t6Yzh4cm9rMmp4NjJucHZuZjl6NGo2cCJ9.JLbhcNhvlfrBN2hQ3UHqbA';

const map = () => {
    useEffect(() => { 
        const map = new mapboxgl.Map({
            container: "map",
            style: 'mapbox://styles/azukiyamada/ckzgc6xx4000915ovod2nvlbk',
            center: [139.7673068, 35.6809591],
            zoom: 13
            });
        });

    return <Wrapper id='map'>

    </Wrapper>
};

export default map;

const Wrapper = tw.div`
    flex-1
`
