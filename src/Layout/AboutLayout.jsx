import React from 'react'
import { Outlet } from 'react-router-dom'
import AboutSideBar from '../components/AboutSideBar'

const AboutLayout = () => {
    return (
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 py-10 px-5">

            <div className="w-full lg:w-64">
                <AboutSideBar />
            </div>

            <div className="flex-1 w-full">
                <Outlet />
            </div>

        </div>
    )
}

export default AboutLayout