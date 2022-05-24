import React from 'react'

const UsersDoc = () => {
  const fileUpload=(e)=>
  {
    
  }
  return (
    <div>
      <input type="file" multiplesize="50" onChange={fileUpload}/>
    </div>
  )
}

export default UsersDoc