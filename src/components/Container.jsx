import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-full  flex-col  justify-center bg-gray-100 p-5 rounded-lg shadow-sm p-4 '>
        {children}
    </div>
  )
}

export default Container