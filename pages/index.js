import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
<<<<<<< Updated upstream
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiYXp1a2l5YW1hZGEiLCJhIjoiY2t6Yzh4cm9rMmp4NjJucHZuZjl6NGo2cCJ9.JLbhcNhvlfrBN2hQ3UHqbA';

export default function Home() {

  useEffect (() => {
    console.log('hello')
  },[])

  return (
    <div className={styles.container}>
      <div className={styles.map}>Map</div>
      <div className={styles.start}>start</div>
    </div>
  )
}
