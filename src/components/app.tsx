import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Slider from './slider/slider'
import Circle from './circle/circle'

const App: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        y: -50,
        opacity: 0,
        duration: 1
      })
    }
  }, [])

  return (
    <div className="app">
      <h1 ref={titleRef}></h1>

      <Circle />
    </div>
  )
}

export default App
