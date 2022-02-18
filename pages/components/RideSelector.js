import React from 'react'
import tw from "tailwind-styled-components" 
import { carList } from "../data/carList"

const RideSelector = () => {
    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>
            <CarList>
                { carList.map((car, index)=>(
                    <Car key={index}>
                        <CarImage src={car.imgUrl} />
                        <CarDetails>
                            <Service>{car.service}</Service>
                            <Time>5 min away</Time>
                        </CarDetails>
                        <Price>¥1,000</Price>
                    </Car>
                ))}
                
            </CarList>
        </Wrapper>
    )
};

export default RideSelector;

const Wrapper = tw.div`
    flex-1
    bg-red
    flex
    flex-col
    overflow-y-scroll
`

const Title = tw.div`
    text-gray-500
    text-center
    text-xs
    py-2
    border-b
`

const CarList = tw.div`
    overflow-y-scroll
`

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
