import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiYXp1a2l5YW1hZGEiLCJhIjoiY2t6Yzh4cm9rMmp4NjJucHZuZjl6NGo2cCJ9.JLbhcNhvlfrBN2hQ3UHqbA';


export default function Home() {

  useEffect (() => {
    console.log('hello')
  },[])

  return (
    <Wrapper>
      <Map>Map</Map>
      <ActionItems>start</ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex
  flex-col
  bg-red-300
  h-screen 
`
const Map = tw.div`
  flex-1
`
const ActionItems = tw.div`
  flex-1
`