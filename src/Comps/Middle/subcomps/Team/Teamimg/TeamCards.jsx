import React from 'react'
import data from './TeamD';
const TeamCards = () => {
  return (
    <div className='Card-wrap'>
        {data.map((val,index)=>
        {
            return (
              <div className="team-cards">
                <img
                  src={val.img1}
                  style={{ height: "14rem", width: "14rem" }}
                  alt="the team member image"
                />
                <div className="desc-team">
                  <h1>{val.name1}</h1>
                  <p>{val.status}</p>
                </div>
              </div>
            );
        })}
    </div>
  )
}

export default TeamCards