import React from 'react'
import tw from "tailwind-styled-components"

const search = () => {
    return(
    <Wrapper>
        <ButtonContainer>
            <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
        </ButtonContainer>
    </Wrapper>
    )
};

export default search;

const Wrapper = tw.div`
    bg-gray-200
    h-screen
`

const ButtonContainer = tw.div`
    bg-white
    px-4
`

const BackButton = tw.img`
    h-12
`