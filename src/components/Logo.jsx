import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex items-center justify-center min-h-[200px] bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div 
        className="relative font-sans"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center space-x-4">
          <div 
            className={`w-16 h-16 bg-primary rounded-full flex items-center justify-center transform transition-all duration-300 ease-in-out ${isHovered ? 'rotate-45' : 'rotate-0'}`}
            aria-hidden="true"
          >
            
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-800">
              <Link className='anchor-link' to='/'>Md Ajhar Alam</Link>
            </h1>
            <div className="relative">
              <div 
                className={`h-0.5 bg-primary transition-all duration-300 ease-in-out ${isHovered ? 'w-full' : 'w-0'}`}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}