import React from 'react'
import Header from '../components/header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'
import SlideBarAdmin from '../components/admin/SlideBarAdmin'

type Props = {}

const Admin = (props: Props) => {
  return (
    <>
        <SlideBarAdmin/>
        <Outlet/>
    </>
  )
}

export default Admin