import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'

type Props = {}

const Client = (props: Props) => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
   </>
  )
}

export default Client