import React, { useState } from 'react'
import { bsFillPlayFill, BspauseFill } from 'react-icons/bs'
import { meal } from '../../constants'


const Intro = () => {
  const [playVideo, setplayVideo] = React.useState(false)
  const vidRef = React.useRef();

  return (
    <div className='app__video'>
      <video 
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className='app__video-overlay flex__center'>
        <div className='app__video-overlay_circle flex__center'>

        </div>
      </div>
    </div>
   
  )
}
export default Intro