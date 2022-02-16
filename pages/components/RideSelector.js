import React from 'react';
import tw from "tailwind-styled-components" 

const RideSelector = () => {
    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>
            <CarList>
                <Car>
                    <CarImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
                    <CarDetails>
                        <Service>Uber X</Service>
                        <Time>5 min away</Time>
                    </CarDetails>
                    <Price>¥1,000</Price>
                </Car>
            </CarList>
        </Wrapper>
    )
};

export default RideSelector;

const Wrapper = tw.div`
    flex-1
    bg-red
`

const Title = tw.div`
    text-gray-500
    text-center
    text-xs
    py-2
    border-b
`

const CarList = tw.div``

const Car = tw.div`
    flex
    p-4
    items-center
`

const CarImage = tw.img`
    h-14
    mr-2
`

const CarDetails = tw.div`
    flex-1
`
const Service = tw.div`
    font-medium
`
const Time = tw.div`
    text-blue-500
    text-xs
`

const Price = tw.div`
    text-sm
`
