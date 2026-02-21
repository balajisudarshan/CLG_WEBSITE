import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import TopHeader from './components/TopHeader'
const Layout = () => {
    return (
        <>
            <TopHeader/>
            <NavBar/>
            <Outlet/>
        </>
    )
}

export default Layout