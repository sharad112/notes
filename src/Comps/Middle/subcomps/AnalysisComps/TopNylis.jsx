import React from 'react'
import imgs from "./user.png" ;
const TopNylis = () => {
  return (
    <div className='topnylis'>
        <div className='left-analysis'>
            <h1>hello john</h1>
            <p>you have 4 unfinished task,you have already completed 70% tasks for today. 
            your progress is very good</p>
        </div>

        <div className='right-analysis'>
            <img src={imgs} style={{height:"15rem"}}/>
        </div>
    </div>
  )
}

export default TopNylis;