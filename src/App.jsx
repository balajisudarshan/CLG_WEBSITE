import React from 'react'
import TopHeader from './components/TopHeader'
import NavBar from './components/NavBar'
import Layout from './Layout/Layout'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AboutUs from './pages/About/AboutUs'
import AboutLayout from './Layout/AboutLayout'
import VissionMission from './pages/About/VissionMission'
import GoverningBody from './pages/About/GoverningBody'
import OrganizationStructure from './pages/About/OrganizationStructure'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Layout/>}>
          <Route path='about' element={<AboutLayout/>}>
            <Route index element={<AboutUs/>}/>
            <Route path='vision' element={<VissionMission/>}/>
            <Route path='governing-body' element={<GoverningBody/>}/>
            <Route path='organization-structure' element={<OrganizationStructure/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App