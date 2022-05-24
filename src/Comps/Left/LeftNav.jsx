import React from "react";
import { MdDashboard } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { AiOutlineTeam } from "react-icons/ai";
import { HiDocumentDuplicate } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const LeftNav = () => {
  return (
    <div className="left">
      <NavLink style={{textDecoration:"none",color:"black"}} className="active" to="/" >
        <div className="lCard">
          <MdDashboard className="icons"/>
          <h1>dashboard</h1>
        </div>
      </NavLink>

      <NavLink  style={{textDecoration:"none",color:"black"}} className="active" to="/analysis">
        <div className="lCard">
          <SiGoogleanalytics className="icons"/>
          <h1>Analysis</h1>
        </div>
      </NavLink>

      <NavLink style={{textDecoration:"none",color:"black"}} className="active" to="/members">
        <div className="lCard">
          <AiOutlineTeam className="icons"/>
          <h1>Members</h1>
        </div>
      </NavLink>

      <NavLink style={{textDecoration:"none",color:"black"}} className="active" to="/documents">
        <div className="lCard">
          <HiDocumentDuplicate className="icons"te/>
          <h1>documents</h1>
        </div>
      </NavLink>

      <NavLink style={{textDecoration:"none",color:"black"}} className="active" to="/settings">
        <div className="lCard">
          <AiFillSetting className="icons"/>
          <h1>settings</h1>
        </div>
      </NavLink>
    </div>
  );
};

export default LeftNav;
