import React from 'react'
import data from './TeamD'
import TeamCards from './TeamCards'
const Teamtop = (props) => {
  return (
    <div>
        <div className='top-heading'>
            <h1>team members</h1>
        </div>

      <div className='team-card-wrapper'>
        <TeamCards/>
      </div>
    </div>
  )
}

export default Teamtop