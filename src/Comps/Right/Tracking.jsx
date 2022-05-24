import React from 'react'
import {FaPlay} from 'react-icons/fa';
const Tracking = () => {
  return (
    <div className='tracking'>
        <div className='track-details'>
            <h1>name of the project</h1>
            <p>you can start tracking</p>
        </div>

        <div className='track-btn'>
            <FaPlay className='plus-btn'/>
        </div>
    </div>
  )
}

export default Tracking