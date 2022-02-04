import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from './About'
import MyCard from './MyCard';


const Home: NextPage = () => {
  return (
    <div>
      <About/>
      <MyCard/>
    </div>
  )
}

export default Home
