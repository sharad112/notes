import React from 'react';
import UsersDoc from './UsersDoc';
const Document = () => {
  return (
    <div className='doc-wrap'>
      <div className='doc-top'>
        <h1>your Documents</h1>
      </div>

      <div className='doc-comps'>
        <UsersDoc/>
      </div>
    </div>    
  )
}

export default Document