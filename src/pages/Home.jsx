import React from 'react'
import {useState} from "react"
import AddInfo from '../components/AddInfo'
import ShowInfo from '../components/ShowInfo'

const Home = () => {
    const [data, setData]=useState([])
    const url = "https://clarus-library-api.vercel.app/"

    

  return (
    <div >
    <h1 className='text-danger text-center'>Clarus Library</h1>
        <AddInfo/>
        <ShowInfo/>
    </div>
  )
}

export default Home