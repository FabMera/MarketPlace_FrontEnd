import React from 'react'

const Error = ({children}) => {
  return (
    <div>
        <p className='text-center' style={{color:'red',fontWeight:'bold'}}>{children}</p>
    </div>
  )
}

export default Error