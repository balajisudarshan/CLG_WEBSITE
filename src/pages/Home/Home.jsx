import React from 'react'
import Hero from './components/Hero'
import CourseOffered from './components/CourseOffered'
import AdministrationSection from './components/AdministrationSection'
const Home = () => {
  return (
      <div className='flex flex-col gap-6'>
        <Hero/>
        <CourseOffered/>
        <AdministrationSection/>
      </div>
  )
}

export default Home