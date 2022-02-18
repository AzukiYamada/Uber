import { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import RideSelector from './components/RideSelector';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Confirm = () => {
    const router = useRouter()
    const { pickup, dropoff } = router.query

    console.log("pickup", pickup)
    console.log("dropoff", dropoff)

    const [ pickupCoordinates, setPickupCoordinates ] = useState([0,0])
    const [ dropoffCoordinates, setDropoffCoordinates ] = useState([0,0])

    const getPickupCoordinates = (pickup) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token:"pk.eyJ1IjoiYXp1a2l5YW1hZGEiLCJhIjoiY2t6Yzh4cm9rMmp4NjJucHZuZjl6NGo2cCJ9.JLbhcNhvlfrBN2hQ3UHqbA",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setPickupCoordinates(data.features[0].center)
        })
    }

    const getDropoffCoordinates = (dropoff) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token:"pk.eyJ1IjoiYXp1a2l5YW1hZGEiLCJhIjoiY2t6Yzh4cm9rMmp4NjJucHZuZjl6NGo2cCJ9.JLbhcNhvlfrBN2hQ3UHqbA",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setDropoffCoordinates(data.features[0].center)
        })
    }

    useEffect(()=>{
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    },[pickup, dropoff])

    return (
        <Wrapper>
            <Map 
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />

            <RideContainer> 
                <RideSelector 
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
                />
                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Confirm
                    </ConfirmButton>
                </ConfirmButtonContainer>

            </RideContainer>
        </Wrapper>
    )
};

export default Confirm;

const Wrapper = tw.div`
    flex
    flex-col
    h-screen
`
const RideContainer = tw.div`
    flex
    flex-col
    flex-1
    h-1/2
`

const ConfirmButtonContainer = tw.div`
    border-t-2
`

const ConfirmButton = tw.div`
    bg-black
    text-white
    my-4
    mx-4
    py-4
    text-center
    text-xl
`