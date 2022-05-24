import React from "react";
import {AiFillBell} from 'react-icons/ai'
import {RiMessageFill} from 'react-icons/ri'

const MainAcc = () => {
  return (
    <div className="main-acc">
      <div className="acc-left">
        <div className="images">
          <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" style={{height:"4rem",width:"4rem"}} alt="the profile image"/>
        </div>

        <div className="details">
          <h1>john doe</h1>
          <p>executive manager</p>
        </div>
      </div>

      <div className="acc-right">
        <AiFillBell className="icon1"/>
        <RiMessageFill className="icon1"/>
      </div>
    </div>
  );
};

export default MainAcc;
