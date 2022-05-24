import React from 'react'

const Account = () => {
  return (
    <div className='acc'>
       <div className='top'>
       <p>workspace</p>
       </div>

       <div className='actual-acc'>
           <img src='https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='profile' style={{height:"3rem",width:"3rem"}}/>
           <p>John Doe Account</p>
       </div>
    </div>
  )
}

export default Account;